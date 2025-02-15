import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { PageContainerComponent } from '../../../shared/layout/page-container/page-container.component';

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
    PageContainerComponent,
    DatePipe
  ],
  providers: [DatePipe]
})
export class CalendarComponent implements OnInit, OnDestroy {
  currentDate: Date = new Date();
  calendarView: string = 'week';
  views: string[] = ['day', 'week', 'month', 'year'];
  hours: number[] = Array.from({length: 24}, (_, i) => i); // 00 to 23 hours
  days: number[] = Array.from({length: 7}, (_, i) => i);
  currentTimePosition: number = 0;
  timezone: string;
  private timeUpdateInterval: any;
  private readonly CELL_HEIGHT = 60; // Height of each time slot in pixels

  constructor(private datePipe: DatePipe) {
    // Get UTC offset
    const offset = -new Date().getTimezoneOffset() / 60;
    this.timezone = `UTC${offset >= 0 ? '+' : ''}${offset}`;
    this.updateCurrentTimePosition();
  }

  formatHour(hour: number): string {
    return hour.toString().padStart(2, '0');
  }

  ngOnInit() {
    this.updateCurrentTimePosition();
    // Update time position every 30 seconds
    this.timeUpdateInterval = setInterval(() => {
      this.updateCurrentTimePosition();
    }, 30000);
  }

  ngOnDestroy() {
    if (this.timeUpdateInterval) {
      clearInterval(this.timeUpdateInterval);
    }
  }

  updateCurrentTimePosition() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    
    // Calculate position based on cell height
    const hoursFromMidnight = hours + (minutes / 60);
    this.currentTimePosition = hoursFromMidnight * this.CELL_HEIGHT;

    // Force immediate update if needed
    requestAnimationFrame(() => {
      const indicator = document.querySelector('.current-time-indicator') as HTMLElement;
      if (indicator) {
        indicator.style.top = `${this.currentTimePosition}px`;
      }
    });
  }

  goToToday() {
    this.currentDate = new Date();
  }

  navigate(direction: 'prev' | 'next') {
    const currentDate = new Date(this.currentDate);
    const daysToAdd = direction === 'next' ? 7 : -7;
    currentDate.setDate(currentDate.getDate() + daysToAdd);
    this.currentDate = currentDate;
  }

  setView(view: string) {
    this.calendarView = view;
  }
}
