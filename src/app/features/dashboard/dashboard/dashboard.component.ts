import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { SidebarService } from '../../../shared/services/sidebar.service';

interface ActivityItem {
  icon: string;
  text: string;
  time: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  isCollapsed$;
  
  stats = [
    {
      icon: 'event',
      title: "Today's Appointments",
      value: 8
    },
    {
      icon: 'people',
      title: 'Total Clients',
      value: 124
    },
    {
      icon: 'schedule',
      title: 'Upcoming',
      value: 15
    }
  ];

  recentActivity: ActivityItem[] = [
    {
      icon: 'event_available',
      text: 'New appointment scheduled with Sarah Johnson',
      time: '2 hours ago'
    },
    {
      icon: 'person_add',
      text: 'New client registered: Michael Smith',
      time: '4 hours ago'
    },
    {
      icon: 'check_circle',
      text: 'Appointment completed with Emma Davis',
      time: 'Yesterday'
    }
  ];

  constructor(private sidebarService: SidebarService) {
    this.isCollapsed$ = this.sidebarService.isCollapsed$;
  }

  ngOnInit() {
    // Subscribe to sidebar state changes if needed
    this.isCollapsed$.subscribe(() => {
      // Handle any layout adjustments needed when sidebar state changes
    });
  }
}
