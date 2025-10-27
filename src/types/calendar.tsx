
export type Recurrence =
  | "none"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "weekdays"
  | "custom";
  
export interface CalendarEvent {
    id: number;
    title: string;
    start: Date;
    end: Date;
    allDay?: boolean;
    timezone?: string;
    recurrence?: Recurrence;
    recurrenceCustom?: string; // JSON string for custom recurrence rules
    guests?: string[];
    videoLink?: string;
    location?: string;
    color?: string;
    attachments?: string[];
    description?: string;
}