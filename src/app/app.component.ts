import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './shared/layout/sidebar/sidebar.component';
import { SidebarService } from './shared/services/sidebar.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    SidebarComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'NailBook Pro';
  isCollapsed$;
  isMobileCollapsed$;

  constructor(private sidebarService: SidebarService) {
    this.isCollapsed$ = this.sidebarService.isCollapsed$;
    this.isMobileCollapsed$ = this.sidebarService.isMobileCollapsed$;
  }
}
