import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageContainerComponent } from '../../../shared/layout/page-container/page-container.component';
import { FormsModule } from '@angular/forms';
import { GridService } from '../../../shared/services/grid.service';

// Material imports
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.sass'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    PageContainerComponent,
    MatCardModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
  ],
})
export class CalendarComponent implements OnInit {
  currentView: 'month' | 'week' | 'day' = 'week';
  currentDate: Date = new Date();
  currentTimezone: string = 'america/chicago';
  weekDays: string[] = [];
  timeSlots: string[] = [];
  timeZones: { value: string; label: string }[] = [];

  constructor(private gridService: GridService) {}

  ngOnInit(): void {
    this.weekDays = this.gridService.getWeekDays();
    this.timeSlots = this.gridService.getTimeSlots();
    this.timeZones = this.gridService.getTimeZones();
    this.initializeCalendar();
  }

  initializeCalendar(): void {
    // Initialize calendar data
  }

  previousPeriod(): void {
    switch (this.currentView) {
      case 'month':
        this.currentDate.setMonth(this.currentDate.getMonth() - 1);
        break;
      case 'week':
        this.currentDate.setDate(this.currentDate.getDate() - 7);
        break;
      case 'day':
        this.currentDate.setDate(this.currentDate.getDate() - 1);
        break;
    }
    this.currentDate = new Date(this.currentDate);
  }

  nextPeriod(): void {
    switch (this.currentView) {
      case 'month':
        this.currentDate.setMonth(this.currentDate.getMonth() + 1);
        break;
      case 'week':
        this.currentDate.setDate(this.currentDate.getDate() + 7);
        break;
      case 'day':
        this.currentDate.setDate(this.currentDate.getDate() + 1);
        break;
    }
    this.currentDate = new Date(this.currentDate);
  }

  hasAppointment(day: string, hour: string): boolean {
    // Mock function - replace with actual appointment checking logic
    return Math.random() > 0.8; // 20% chance of having an appointment
  }

  getFormattedDate(): string {
    return this.gridService.getFormattedDate(this.currentDate);
  }
}
