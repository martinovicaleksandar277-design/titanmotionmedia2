import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface DemoRequest {
  id?: string;
  name: string;
  company?: string;
  email: string;
  notes?: string;
  photo_urls: string[];
  status?: string;
  created_at?: string;
  updated_at?: string;
}

export async function uploadDemoPhotos(files: File[]): Promise<string[]> {
  const uploadPromises = files.map(async (file) => {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random().toString(36).substring(2)}_${Date.now()}.${fileExt}`;
    const filePath = `${fileName}`;

    const { error } = await supabase.storage
      .from('demo-photos')
      .upload(filePath, file);

    if (error) {
      throw error;
    }

    const { data: { publicUrl } } = supabase.storage
      .from('demo-photos')
      .getPublicUrl(filePath);

    return publicUrl;
  });

  return Promise.all(uploadPromises);
}

export async function submitDemoRequest(request: DemoRequest): Promise<void> {
  const { error } = await supabase
    .from('demo_requests')
    .insert([request]);

  if (error) {
    throw error;
  }
}
