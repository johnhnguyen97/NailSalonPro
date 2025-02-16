import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GridService {
  private readonly HOURS = Array.from({ length: 9 }, (_, i) => {
    const hour = i + 9;
    return hour <= 12 ? `${hour}:00 AM` : `${hour - 12}:00 PM`;
  });

  private readonly DAYS = [
    'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'
  ];

  private readonly TIME_ZONES = [
    { value: 'america/chicago', label: 'Central (UTC-6)' },
    { value: 'america/new_york', label: 'Eastern (UTC-5)' },
    { value: 'america/los_angeles', label: 'Pacific (UTC-8)' },
  ];

  getTimeSlots(): string[] {
    return this.HOURS;
  }

  getWeekDays(): string[] {
    return this.DAYS;
  }

  getTimeZones(): { value: string; label: string }[] {
    return this.TIME_ZONES;
  }

  getFormattedDate(date: Date): string {
    return new Intl.DateTimeFormat('en-US', {
      month: 'long',
      year: 'numeric'
    }).format(date);
  }

  getWeekDates(startDate: Date): Date[] {
    const dates: Date[] = [];
    const currentDate = new Date(startDate);
    const dayOfWeek = currentDate.getDay();
    const diff = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
    
    currentDate.setDate(currentDate.getDate() - diff);
    
    for (let i = 0; i < 7; i++) {
      dates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }
    
    return dates;
  }

  adjustToTimezone(date: Date, timezone: string): Date {
    return new Date(date.toLocaleString('en-US', { timeZone: timezone }));
  }
}
