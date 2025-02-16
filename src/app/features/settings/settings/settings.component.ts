import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageContainerComponent } from '../../../shared/layout/page-container/page-container.component';

// Material Imports
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.sass'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PageContainerComponent,
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatRadioModule,
    MatListModule,
    MatSlideToggleModule,
    MatCheckboxModule
  ]
})
export class SettingsComponent {
  workDays = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ];

  defaultBusinessHours = {
    start: '09:00',
    end: '17:00'
  };

  businessInfo = {
    name: '',
    email: '',
    phone: '',
    address: '',
    timezone: 'america/chicago',
    websiteTitle: ''
  };

  notificationSettings = {
    email: false,
    sms: false,
    browser: false,
    emailReminderTime: '24',
    smsReminderTime: '1'
  };

  appearanceSettings = {
    theme: 'light',
    density: 'comfortable',
    primaryColor: 'primary'
  };

  businessHours: { [key: string]: { active: boolean, start: string, end: string } } = {};

  constructor() {
    // Initialize business hours
    this.workDays.forEach(day => {
      this.businessHours[day] = {
        active: true,
        start: this.defaultBusinessHours.start,
        end: this.defaultBusinessHours.end
      };
    });
  }

  updateBusinessInfo() {
    console.log('Saving business info:', this.businessInfo);
    // TODO: Implement save functionality
  }

  updateBusinessHours() {
    console.log('Saving business hours:', this.businessHours);
    // TODO: Implement save functionality
  }

  updateNotificationSettings() {
    console.log('Saving notification settings:', this.notificationSettings);
    // TODO: Implement save functionality
  }

  updateAppearance() {
    console.log('Saving appearance settings:', this.appearanceSettings);
    // TODO: Implement save functionality
  }

  updatePassword(currentPassword: string, newPassword: string, confirmPassword: string) {
    if (newPassword !== confirmPassword) {
      console.error('Passwords do not match');
      return;
    }
    console.log('Updating password');
    // TODO: Implement password update functionality
  }

  toggleTwoFactor(enabled: boolean) {
    console.log('Two-factor authentication:', enabled ? 'enabled' : 'disabled');
    // TODO: Implement 2FA toggle functionality
  }
}
