export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      [_: string]: {
        Row: { [_: string]: any }
        Insert: { [_: string]: any }
        Update: { [_: string]: any }
        Relationships: any[]
      }
    }
    Views: {
      [_: string]: {
        Row: { [_: string]: any }
        Relationships: any[]
      }
    }
    Functions: {
      [_: string]: {
        Args: { [_: string]: any }
        Returns: any
      }
    }
    Enums: {
      [_: string]: string
    }
    CompositeTypes: {
      [_: string]: {
        [_: string]: any
      }
    }
  }
}