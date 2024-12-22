// app.routes.ts
import { Routes } from '@angular/router';
import { DashboardPage } from './dashboard/dashboard.page';
import { WorkoutLoggerPage } from './workout-logger/workout-logger.page';
import { GalleryPage } from './gallery/gallery.page';
import { RemindersPage } from './reminders/reminders.page';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, // Default redirect to dashboard
  { path: 'dashboard', component: DashboardPage },
  { path: 'workout-logger', component: WorkoutLoggerPage },
  { path: 'gallery', component: GalleryPage },
  { path: 'reminders', component: RemindersPage },
];
