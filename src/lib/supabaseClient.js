import { createClient } from '@supabase/supabase-js';

// These values would typically be in a .env file
// I'll use placeholders for now, and the user can replace them
// or I can ask for them if they have a project ready.
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://your-project-id.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-anon-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
