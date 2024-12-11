import React, { useEffect, useState } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import './WorkshopCalendar.css';

const locales = {
  // Add your preferred locale here if needed
};

const localizer = dateFnsLocalizer({
  format: (date, formatStr = 'MM/dd/yyyy') => format(date, formatStr),
  parse: (dateStr, formatStr = 'MM/dd/yyyy') => parse(dateStr, formatStr, new Date()),
  startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 1 }),
  getDay,
  locales,
});

const WorkshopCalendar = () => {
  const [events, setEvents] = useState([]);

  // Sample events for testing (Replace or load dynamically as needed)
  useEffect(() => {
    setEvents([
      {
        id: 1,
        title: 'React Workshop',
        start: new Date(2024, 11, 10, 10, 0), // December 10, 2024, at 10:00 AM
        end: new Date(2024, 11, 10, 12, 0),   // December 10, 2024, at 12:00 PM
      },
      {
        id: 2,
        title: 'Spring Boot Workshop',
        start: new Date(2024, 11, 15, 14, 0), // December 15, 2024, at 2:00 PM
        end: new Date(2024, 11, 15, 16, 0),   // December 15, 2024, at 4:00 PM
      },
    ]);
  }, []);

  return (
    <div className="workshop-calendar-container">
      <h2 className="calendar-title">Workshop Calendar</h2>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};

export default WorkshopCalendar;
