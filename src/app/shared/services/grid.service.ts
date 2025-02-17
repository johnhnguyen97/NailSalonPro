import { Injectable } from '@angular/core';

export interface CalendarDay {
  date: Date | null;
  isCurrentMonth: boolean;
  isToday: boolean;
  events?: AppointmentEvent[];
}

export interface Hour {
  hour: number;
  displayTime: string;
}

export interface AppointmentEvent {
  id: string;
  title: string;
  type: 'meeting' | 'client' | 'consult' | 'other';
  startTime: Date;
  endTime: Date;
}

@Injectable({
  providedIn: 'root'
})
export class GridService {
  private weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  private shortWeekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  constructor() {}

  getWeekDays(short = false): string[] {
    return short ? this.shortWeekDays : this.weekDays;
  }

  generateCalendar(year: number, month: number): CalendarDay[][] {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const today = new Date();
    
    const firstWeekday = firstDay.getDay();
    const weeks: CalendarDay[][] = [];
    let currentWeek: CalendarDay[] = [];

    // Fill initial empty slots
    for (let i = 0; i < firstWeekday; i++) {
      const prevMonthDate = new Date(year, month, -i);
      currentWeek.unshift({
        date: prevMonthDate,
        isCurrentMonth: false,
        isToday: this.isToday(prevMonthDate),
        events: []
      });
    }

    // Fill current month
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(year, month, i);
      currentWeek.push({
        date,
        isCurrentMonth: true,
        isToday: this.isToday(date),
        events: []
      });

      if (currentWeek.length === 7) {
        weeks.push(currentWeek);
        currentWeek = [];
      }
    }

    // Fill remaining slots
    if (currentWeek.length > 0) {
      let nextMonthDay = 1;
      while (currentWeek.length < 7) {
        const nextMonthDate = new Date(year, month + 1, nextMonthDay++);
        currentWeek.push({
          date: nextMonthDate,
          isCurrentMonth: false,
          isToday: this.isToday(nextMonthDate),
          events: []
        });
      }
      weeks.push(currentWeek);
    }

    return weeks;
  }

  generateHours(): Hour[] {
    return Array.from({ length: 24 }, (_, i) => ({
      hour: i,
      displayTime: this.formatHour(i)
    }));
  }

  getTimeSlots(): string[] {
    return this.generateHours().map(hour => hour.displayTime);
  }

  private formatHour(hour: number): string {
    const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
    const period = hour < 12 ? 'AM' : 'PM';
    return `${displayHour}:00 ${period}`;
  }

  getCurrentWeekDates(date: Date): Date[] {
    const startDate = new Date(date);
    startDate.setDate(date.getDate() - date.getDay());
    
    return Array(7).fill(null).map((_, i) => {
      const day = new Date(startDate);
      day.setDate(startDate.getDate() + i);
      return day;
    });
  }

  getFormattedDate(date: Date): string {
    return date.toLocaleDateString('default', {
      month: 'long',
      year: 'numeric'
    });
  }

  private isToday(date: Date): boolean {
    const today = new Date();
    return date.getDate() === today.getDate() &&
           date.getMonth() === today.getMonth() &&
           date.getFullYear() === today.getFullYear();
  }
}
