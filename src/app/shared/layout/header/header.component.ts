import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ThemeService } from '../../services/theme.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class HeaderComponent {
  pageTitle = 'Dashboard';
  
  constructor(
    public themeService: ThemeService,
    private router: Router
  ) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.updatePageTitle();
    });
  }

  private updatePageTitle() {
    const path = this.router.url.split('/')[1];
    if (!path) {
      this.pageTitle = 'Dashboard';
    } else {
      this.pageTitle = path.charAt(0).toUpperCase() + path.slice(1);
    }
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
