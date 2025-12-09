/*
  # Remove Machine Type Column

  ## Overview
  This migration removes the machine_type column from the demo_requests table as it is no longer needed.

  ## Changes
  
  ### Tables Modified
  
  **`demo_requests`**
  - Removes `machine_type` column

  ## Notes
  - This is a safe operation as the column is being removed, not data being deleted from rows
  - The column will no longer be available for new or existing records
*/

-- Remove machine_type column from demo_requests table
DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'demo_requests' AND column_name = 'machine_type'
  ) THEN
    ALTER TABLE demo_requests DROP COLUMN machine_type;
  END IF;
END $$;
