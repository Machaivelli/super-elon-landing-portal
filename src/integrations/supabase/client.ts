// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://vsxryqwjikevxijpfyto.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZzeHJ5cXdqaWtldnhpanBmeXRvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ0NDEyODgsImV4cCI6MjA1MDAxNzI4OH0.YO43dItB-EKxULeuAs9_ydOIybG9Z2wAZPaLXMyX4_o";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);