import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { CalendarService, CalendarDay, Hour } from '../services/calendar.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.sass'],
  standalone: true,
  imports: [CommonModule, MatIconModule],
  host: {
    class: 'calendar-wrapper'
  }
})
export class CalendarComponent implements OnInit {
  weeks: CalendarDay[][] = [];
  hours: Hour[] = [];
  daysOfWeek: string[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  currentYear: number;
  currentMonth: number;

  constructor(private calendarService: CalendarService) {
    const today = new Date();
    this.currentYear = today.getFullYear();
    this.currentMonth = today.getMonth();
  }

  ngOnInit(): void {
    this.generateCalendar();
    this.hours = this.calendarService.generateHours();
  }

  generateCalendar(): void {
    this.weeks = this.calendarService.generateCalendar(this.currentYear, this.currentMonth);
  }

  prevMonth(): void {
    this.currentMonth--;
    if (this.currentMonth < 0) {
      this.currentMonth = 11;
      this.currentYear--;
    }
    this.generateCalendar();
  }

  nextMonth(): void {
    this.currentMonth++;
    if (this.currentMonth > 11) {
      this.currentMonth = 0;
      this.currentYear++;
    }
    this.generateCalendar();
  }

  formatHour(hour: number): string {
    return hour.toString().padStart(2, '0') + ':00';
  }
}
