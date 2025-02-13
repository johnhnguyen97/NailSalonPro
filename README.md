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
    └── dashboard/
```

3. **Creating Components**
```bash
# Create layout components
ng generate component shared/layout/header
ng generate component shared/layout/sidebar
ng generate component shared/layout/main-content

# Create feature module
ng generate module features/dashboard --routing
ng generate component features/dashboard/dashboard
```

## Styling Implementation

### Header Component

1. **Header Structure** (app.component.html)
```html
<div class="header">
  <div class="header-left">
    <button class="hamburger-button">
      <span class="line line-1"></span>
      <span class="line line-2"></span>
      <span class="line line-3"></span>
    </button>
    <div class="logo">
      <mat-icon>spa</mat-icon>
      <span>NailBook Pro</span>
    </div>
  </div>
</div>
```

2. **Header Styling** (app.component.sass)
```sass
.header
  height: 52px
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08)
  padding: 0 20px

// See full styling in app.component.sass
```

### Sidebar Navigation

1. **Setup Sidebar** (sidebar.component.sass)
```sass
.sidebar-container
  padding-top: 12px
  mat-nav-list a
    height: 48px
    margin: 6px 16px
```

2. **Responsive Design**
```sass
@media screen and (max-width: 599px)
  .sidebar-container
    // Mobile styles
```

## Key Measurements

- Header Height: 52px
- Sidebar Width: 240px
- Menu Items:
  - Desktop: 48px height
  - Mobile: 40px height
  - Margins: 6px vertical, 16px horizontal

## Color Scheme

```sass
// Primary Colors
$primary: #ff4081    // Pink
$text-dark: #424242  // Dark gray
$text-light: #757575 // Medium gray

// States
$active-bg: rgba(255, 64, 129, 0.08) // Light pink
```

## Git Setup and Deployment

1. **Initialize Repository**
```bash
git init
git add .
git commit -m "Initial commit: Basic project structure"
```

2. **Link to GitHub**
```bash
git remote add origin https://github.com/johnhnguyen97/NailSalonPro.git
git branch -M main
git push -u origin main
```

3. **Commit Changes**
```bash
git add .
git commit -m "feat: Add header and sidebar components with responsive design"
git push origin main
```

## Development Guidelines

1. **Component Creation**
   - Use `ng generate` commands
   - Follow the feature module pattern
   - Keep components focused and single-responsibility

2. **Styling**
   - Use SASS nesting for clarity
   - Maintain consistent spacing
   - Follow mobile-first approach

3. **Git Workflow**
   - Create feature branches
   - Use conventional commits
   - Regular small commits

## Next Steps

1. Implement appointment management features
2. Add client management system
3. Integrate calendar view
4. Add authentication
5. Implement booking system

## Dependencies

- Angular Material
- Angular Router
- TypeScript
- SASS

## Running the Project

```bash
npm install
ng serve
```

Access the application at `http://localhost:4200`
