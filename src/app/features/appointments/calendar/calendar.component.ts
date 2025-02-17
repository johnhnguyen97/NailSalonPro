import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarService, CalendarDay, Hour } from '../services/calendar.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.sass'],
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatButtonToggleModule,
    FormsModule
  ]
})
export class CalendarComponent implements OnInit {
  weeks: CalendarDay[][] = [];
  hours: Hour[] = [];
  daysOfWeek: string[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  currentYear: number;
  currentMonth: number;
  viewMode: 'week' | 'day' = 'week';

  constructor(private calendarService: CalendarService) {
    const today = new Date();
    this.currentYear = today.getFullYear();
    this.currentMonth = today.getMonth();
  }

  ngOnInit(): void {
    this.generateCalendar();
  }

  generateCalendar(): void {
    this.weeks = this.calendarService.generateCalendar(this.currentYear, this.currentMonth);
    this.hours = this.calendarService.generateHours();
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

  today(): void {
    const today = new Date();
    this.currentYear = today.getFullYear();
    this.currentMonth = today.getMonth();
    this.generateCalendar();
  }

  onViewModeChange(mode: 'week' | 'day'): void {
    this.viewMode = mode;
  }
}
