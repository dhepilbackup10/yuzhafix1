import { createClient } from '@supabase/supabase-js'

// Supabase configuration using your env vars
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://xaluaekioqwxtzhnmygg.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhhbHVhZWtpb3F3eHR6aG5teWdnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTcxODQ1OTEsImV4cCI6MjA3Mjc2MDU5MX0.1-SFKaJtbuovb7vhy1cartgZveJOsMl__luyf9I3M9I'

// Create Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// API wrapper with your actual endpoints
export const api = {
  supabase,
  baseUrl: import.meta.env.VITE_API_BASE || 'https://xaluaekioqwxtzhnmygg.supabase.co/functions/v1',
  
  // Auth methods
  async signIn(email: string, password: string) {
    return await supabase.auth.signInWithPassword({ email, password })
  },
  
  async signOut() {
    return await supabase.auth.signOut()
  },
  
  // Database methods
  async get(table: string, query?: any) {
    let request = supabase.from(table).select('*')
    if (query) {
      // Add query filters here
    }
    return await request
  },
  
  async post(table: string, data: any) {
    return await supabase.from(table).insert(data)
  },
  
  // Edge Functions (matching your supabase functions)
  async mengSync(data: any) {
    return await supabase.functions.invoke('meng-sync', { body: data })
  },
  
  async raraClockIn(data: any) {
    return await supabase.functions.invoke('rara-clockin', { body: data })
  },
  
  async uploadDrive(file: File) {
    return await supabase.functions.invoke('upload-drive', { body: file })
  },
  
  async getDatabaseStats() {
    return await supabase.functions.invoke('database-stats')
  },
  
  // Generic function caller
  async callFunction(functionName: string, data?: any) {
    return await supabase.functions.invoke(functionName, { body: data })
  }
}

export default api