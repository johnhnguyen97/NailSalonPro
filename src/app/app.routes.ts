import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./features/dashboard/dashboard.module')
      .then(m => m.DashboardModule)
  },
  {
    path: 'calendar',
    loadChildren: () => import('./features/appointments/appointments.module')
      .then(m => m.AppointmentsModule)
  },
  {
    path: 'clients',
    loadChildren: () => import('./features/clients/clients.module')
      .then(m => m.ClientsModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./features/settings/settings.module')
      .then(m => m.SettingsModule)
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];
