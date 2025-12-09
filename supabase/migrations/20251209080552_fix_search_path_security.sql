/*
  # Fix Function Search Path Security Issue

  ## Overview
  This migration fixes a security vulnerability in the `update_updated_at_column()` function
  by setting an immutable search_path. This prevents potential SQL injection attacks through
  search_path manipulation.

  ## Changes Made
  
  ### Security Fix
  - Recreates the `update_updated_at_column()` function with:
    - `SECURITY DEFINER` clause for proper privilege handling
    - `SET search_path = pg_catalog, public` to prevent search_path manipulation attacks
  
  ## Security Impact
  Without this fix, malicious users could potentially manipulate the search_path to hijack
  function calls. This migration ensures the function always uses a safe, immutable search_path.

  ## Notes
  - This is a critical security fix and should be applied immediately
  - The function behavior remains unchanged; only security is enhanced
  - No data is modified, only the function definition
*/

-- Recreate the function with security definer and immutable search_path
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER 
SECURITY DEFINER
SET search_path = pg_catalog, public
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;