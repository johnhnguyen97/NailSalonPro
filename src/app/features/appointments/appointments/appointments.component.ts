import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

type CalendarView = 'day' | 'week' | 'month' | 'year';

@Component({
  selector: 'app-appointments',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule
  ],
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.sass']
})
export class AppointmentsComponent {
  calendarView: CalendarView = 'month';
  currentDate = new Date();

  goToToday(): void {
    this.currentDate = new Date();
  }

  navigate(direction: 'prev' | 'next'): void {
    const month = this.currentDate.getMonth();
    const year = this.currentDate.getFullYear();
    
    if (direction === 'prev') {
      this.currentDate = new Date(year, month - 1);
    } else {
      this.currentDate = new Date(year, month + 1);
    }
  }
}
