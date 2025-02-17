import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { PageContainerComponent } from '../../../shared/layout/page-container/page-container.component';
import { GridService, CalendarDay, Hour, AppointmentEvent } from '../../../shared/services/grid.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.sass'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    PageContainerComponent,
  ],
})
export class CalendarComponent implements OnInit {
  currentView: 'month' | 'week' | 'day' = 'week';
  currentYear: number;
  currentMonth: number;
  currentDate: Date;
  
  weeks: CalendarDay[][] = [];
  hours: Hour[] = [];
  weekDays: string[] = [];
  weekDates: Date[] = [];
  appointments: Map<string, AppointmentEvent[]> = new Map();

  constructor(private gridService: GridService) {
    const today = new Date();
    this.currentYear = today.getFullYear();
    this.currentMonth = today.getMonth();
    this.currentDate = today;
  }

  ngOnInit(): void {
    this.weekDays = this.gridService.getWeekDays();
    this.hours = this.gridService.generateHours();
    this.generateCalendar();
    this.initializeMockAppointments();
  }

  generateCalendar(): void {
    this.weeks = this.gridService.generateCalendar(this.currentYear, this.currentMonth);
    this.weekDates = this.gridService.getCurrentWeekDates(this.currentDate);
  }

  previousPeriod(): void {
    switch (this.currentView) {
      case 'month':
        this.currentMonth--;
        if (this.currentMonth < 0) {
          this.currentMonth = 11;
          this.currentYear--;
        }
        this.currentDate = new Date(this.currentYear, this.currentMonth, 1);
        break;
      case 'week':
        this.currentDate.setDate(this.currentDate.getDate() - 7);
        this.currentMonth = this.currentDate.getMonth();
        this.currentYear = this.currentDate.getFullYear();
        break;
      case 'day':
        this.currentDate.setDate(this.currentDate.getDate() - 1);
        this.currentMonth = this.currentDate.getMonth();
        this.currentYear = this.currentDate.getFullYear();
        break;
    }
    this.generateCalendar();
  }

  nextPeriod(): void {
    switch (this.currentView) {
      case 'month':
        this.currentMonth++;
        if (this.currentMonth > 11) {
          this.currentMonth = 0;
          this.currentYear++;
        }
        this.currentDate = new Date(this.currentYear, this.currentMonth, 1);
        break;
      case 'week':
        this.currentDate.setDate(this.currentDate.getDate() + 7);
        this.currentMonth = this.currentDate.getMonth();
        this.currentYear = this.currentDate.getFullYear();
        break;
      case 'day':
        this.currentDate.setDate(this.currentDate.getDate() + 1);
        this.currentMonth = this.currentDate.getMonth();
        this.currentYear = this.currentDate.getFullYear();
        break;
    }
    this.generateCalendar();
  }

  getFormattedMonth(): string {
    return this.currentDate.toLocaleString('default', { month: 'long' });
  }

  getFormattedYear(): string {
    return this.currentYear.toString();
  }

  getDayDate(index: number): string {
    if (index >= 0 && index < this.weekDates.length) {
      return this.weekDates[index].getDate().toString();
    }
    return '';
  }

  onTimeSlotClick(dayIndex: number, hourIndex: number): void {
    console.log(`Clicked: Day ${dayIndex}, Hour ${hourIndex}`);
  }

  hasAppointment(dayIndex: number, hourIndex: number): boolean {
    const key = `${dayIndex}-${hourIndex}`;
    return this.appointments.has(key);
  }

  getAppointmentTitle(dayIndex: number, hourIndex: number): string {
    const key = `${dayIndex}-${hourIndex}`;
    const appointments = this.appointments.get(key);
    return appointments?.[0]?.title || '';
  }

  getAppointments(dayIndex: number, hourIndex: number): AppointmentEvent[] {
    const key = `${dayIndex}-${hourIndex}`;
    return this.appointments.get(key) || [];
  }

  initializeMockAppointments(): void {
    this.appointments.set('1-10', [{
      id: '1',
      title: 'Client Meeting',
      type: 'meeting',
      startTime: new Date(),
      endTime: new Date()
    }]);
    this.appointments.set('3-14', [{
      id: '2',
      title: 'Consultation',
      type: 'consult',
      startTime: new Date(),
      endTime: new Date()
    }]);
  }
}
