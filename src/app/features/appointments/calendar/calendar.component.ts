import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

type CalendarView = 'day' | 'week' | 'month' | 'year';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.sass',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule
  ],
  providers: [DatePipe]
})
export class CalendarComponent {
  currentDate: Date = new Date();
  calendarView: CalendarView = 'month';

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
