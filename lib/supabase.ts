// lib/supabase.ts
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://jjirqarssvxehamgmdxy.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpqaXJxYXJzc3Z4ZWhhbWdtZHh5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQyOTY2MDQsImV4cCI6MjA2OTg3MjYwNH0.S_xjiEUYF-bAoewtFH76EDVULxyycyYO2OjONaXRWwA';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default supabase;