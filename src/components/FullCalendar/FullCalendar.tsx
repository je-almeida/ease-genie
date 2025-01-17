// components/Calendar.tsx
import React, { useState, useRef, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react'; // main component and types
import dayGridPlugin from '@fullcalendar/daygrid'; // month view plugin
import timeGridPlugin from '@fullcalendar/timegrid'; // week/day view plugin
import interactionPlugin from '@fullcalendar/interaction'; // for interactions like click
import { Button } from "~/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs"
import {
    ChevronRight,
    ChevronLeft,
    Rows3,
    Grid3x3,
    Columns3,
    CalendarDays
  } from "lucide-react"
import { cn } from '~/utils/cn';
import { format } from "date-fns"
import { Popover,PopoverContent, PopoverTrigger } from '~/components/ui/popover';
import { Calendar } from "~/components/ui/calendar"

const Schedule: React.FC = () => {
  // Define the events with proper typing
  const events: EventInput[] = [
    { id: '1', title: 'Event 1', start: '2025-01-15', allDay: true },
    { id: '2', title: 'Event 2', start: '2025-01-16', allDay: false },
  ];

  const [date, setDate] = React.useState<Date>()
  const [calendarTitle, setCalendarTitle] = useState('');
  const calendarRef = useRef<any>(null);
  const [currentView, setCurrentView] = useState('dayGridMonth');


  const handleDateChange = () => {
    // Update the title when the view changes (e.g., navigating between months, weeks, or days)
    if (calendarRef.current) {
      const calendarApi = calendarRef.current.getApi();
      setCalendarTitle(calendarApi.view.title); // Capture the updated title when the view changes
    }
  };

  const handleViewChange = (view) => {
    calendarRef.current?.getApi().changeView(view)
  };

  // Handle event click
  function handleEventClick(clickInfo: EventClickArg) {
        alert(`Event: ${clickInfo.event.title}`);
        console.log('Event details:', clickInfo);
}

return (<>
    {/* Calendar header */}
    <div className='flex flex-1 flex-row justify-between'>
        <div className='flex flex-1 flex-row gap-4'>
            {/* Calendar Navigation */}
            <Button variant="ghost" size="icon" onClick={() => calendarRef.current?.getApi().prev()}>
                <ChevronLeft />
            </Button>
            <h1 className="head-lg mb-xxl">{calendarTitle}</h1> 
            <Button variant="ghost" size="icon" onClick={() => calendarRef.current?.getApi().next()}>
                <ChevronRight />
            </Button>

            {/*Datepicker popover */}
            <Popover>  
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className={cn(
                    "justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarDays />
                  {/* {date ? format(date, "PPP") : <span>Pick a date</span>} */}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>

            {/*Select today */}
            <Button variant="outline" onClick={() => calendarRef.current?.getApi().today()}>
                Hoje
            </Button>
        </div>
        <div>
            <Tabs defaultValue="month" className="">
                <TabsList>
                    <TabsTrigger value="month" className="flex flex-row gap-1" onClick={() => handleViewChange("dayGridMonth")}>
                        <Grid3x3 /> Month
                    </TabsTrigger>
                    <TabsTrigger value="week" className="flex flex-row gap-1" onClick={() => handleViewChange('timeGridWeek')}>
                        <Columns3 /> Week
                    </TabsTrigger>
                    <TabsTrigger value="day" className="flex flex-row gap-1" onClick={() => handleViewChange('timeGridDay')}>
                        <Rows3 /> Day
                    </TabsTrigger>
                </TabsList>
            </Tabs>
        </div>
    </div>
    
    {/* Calendar */}
    <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            ref={calendarRef} // Attach the calendar reference
            initialView={currentView} // default view
            headerToolbar={false} // hide toolbar
            events={events} // add the events
            eventClick={handleEventClick} // handle event click
            editable={true} // allow event editing
            selectable={true} // allow selecting times/dates
            datesSet={handleDateChange} // Capture the title whenever the date/view changes
    />
</>);
};

export default Schedule;
