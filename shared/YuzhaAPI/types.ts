// Supabase generated types will go here
// Run: npm run supabase:gen-types to generate from your database schema

export interface Database {
  public: {
    Tables: {
      // Your database tables will be defined here
    }
    Views: {
      // Your database views will be defined here  
    }
    Functions: {
      // Your database functions will be defined here
    }
  }
}

export type Tables<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Row']
export type TablesInsert<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Insert']
export type TablesUpdate<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Update']