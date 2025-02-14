import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from '../calendar/calendar.component';

@Component({
  selector: 'app-appointments',
  standalone: true,
  imports: [
    CommonModule,
    CalendarComponent
  ],
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.sass']
})
export class AppointmentsComponent { }
