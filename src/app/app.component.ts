import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SharedModule } from './shared/shared.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  standalone: true,
  imports: [RouterOutlet, MatSidenavModule, SharedModule]
})
export class AppComponent {
  title = 'appointment-dashboard';
  isSidebarOpen = true;
  isMenuAnimated = false;  // Changed from isMenuAnimation to isMenuAnimated to match HTML

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
    this.isMenuAnimated = !this.isMenuAnimated;
  }
}
