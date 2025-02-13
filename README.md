# NailSalon Pro - Appointment Dashboard

A modern, responsive appointment management system built with Angular for nail salons.

## Setup Steps

1. **Initial Project Setup**
```bash
ng new appointment-dashboard
cd appointment-dashboard
ng add @angular/material
```

2. **Project Structure**
```
src/app/
├── shared/
│   ├── layout/
│   │   ├── header/
│   │   ├── sidebar/
│   │   └── main-content/
│   └── shared.module.ts
└── features/
    ├── dashboard/
    ├── appointments/
    ├── clients/
    └── settings/
```

3. **Creating Components & Modules**
```bash
# Layout components
ng generate component shared/layout/header
ng generate component shared/layout/sidebar
ng generate component shared/layout/main-content

# Feature modules with routing
ng generate module features/dashboard --routing
ng generate component features/dashboard/dashboard

ng generate module features/appointments --routing
ng generate component features/appointments/appointments

ng generate module features/clients --routing
ng generate component features/clients/clients

ng generate module features/settings --routing
ng generate component features/settings/settings
```

## Module Setup and Routing

1. **Feature Module Setup** (example: appointments.module.ts)
```typescript
@NgModule({
  declarations: [AppointmentsComponent],
  imports: [
    CommonModule,
    AppointmentsRoutingModule,
    MaterialModule
  ]
})
export class AppointmentsModule { }
```

2. **Feature Routing** (example: appointments-routing.module.ts)
```typescript
const routes: Routes = [
  {
    path: '',
    component: AppointmentsComponent
  }
];
```

3. **Main App Routes** (app.routes.ts)
```typescript
export const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./features/dashboard/dashboard.module')
      .then(m => m.DashboardModule)
  },
  {
    path: 'appointments',
    loadChildren: () => import('./features/appointments/appointments.module')
      .then(m => m.AppointmentsModule)
  },
  // Similar for clients and settings
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];
```

4. **Sidebar Navigation Links**
```typescript
menuItems = [
  { path: '/dashboard', icon: 'dashboard', label: 'Dashboard' },
  { path: '/appointments', icon: 'event', label: 'Appointments' },
  { path: '/clients', icon: 'people', label: 'Clients' },
  { path: '/settings', icon: 'settings', label: 'Settings' }
];
```

## Component Connections

1. **Layout Integration**
```html
<!-- app.component.html -->
<mat-sidenav-container>
  <mat-sidenav [opened]="isSidebarOpen">
    <app-sidebar></app-sidebar>
  </mat-sidenav>
  <mat-sidenav-content>
    <router-outlet></router-outlet>
  </mat-sidenav-content>
</mat-sidenav-container>
```

2. **Shared Module Exports**
```typescript
@NgModule({
  exports: [
    CommonModule,
    MaterialModule,
    HeaderComponent,
    SidebarComponent,
    MainContentComponent
  ]
})
export class SharedModule { }
```

## Styling Implementation

[Previous styling sections remain the same...]

## Git Setup and Deployment

1. **Initialize Repository**
```bash
git init
git add .
git commit -m "feat: Initial setup and layout components"
```

2. **Feature Branch for Navigation**
```bash
git checkout -b feature/navigation
git add .
git commit -m "feat(navigation): Add routing and feature modules

- Add dashboard module with routing
- Add appointments module and component
- Add clients module and component
- Add settings module and component
- Implement lazy loading for all features
- Connect sidebar navigation with routes"
```

3. **Push Changes**
```bash
git push origin feature/navigation
```

[Previous sections for Development Guidelines, Next Steps, Dependencies, and Running the Project remain the same...]

## Route Structure

```
/                   -> Redirects to /dashboard
/dashboard          -> Main dashboard view
/appointments       -> Appointments management
/clients           -> Client management
/settings          -> Application settings
```

Each route is lazy-loaded for better performance and code organization.
