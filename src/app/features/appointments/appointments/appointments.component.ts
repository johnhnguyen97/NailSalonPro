import { Component } from '@angular/core';
import { CalendarComponent } from '../calendar/calendar.component';

@Component({
  selector: 'app-appointments',
  template: '<app-calendar></app-calendar>',
  standalone: true,
  imports: [
    CalendarComponent
  ]
})
export class AppointmentsComponent {
  constructor() {}
}
