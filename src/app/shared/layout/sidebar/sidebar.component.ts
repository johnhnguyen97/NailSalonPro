import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',  // This is used in HTML like <app-sidebar>
  templateUrl: './sidebar.component.html',  // Points to the HTML template
  styleUrls: ['./sidebar.component.sass'],  // Points to the SASS styles
  standalone: false
})
export class SidebarComponent {
  // This array is used in the HTML with *ngFor
  menuItems = [
    { path: '/appointments', icon: 'event', label: 'Appointments' },
    { path: '/clients', icon: 'people', label: 'Clients' },
    { path: '/settings', icon: 'settings', label: 'Settings' }
  ];

  // You can also add methods that can be called from the HTML
  onMenuItemClick(item: any) {
    console.log(`Clicked: ${item.label}`);
  }
}
