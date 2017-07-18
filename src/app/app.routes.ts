import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PeopleComponent } from "app/people/people.component";

export const routes: Routes = [
  {
    path: "dashboard",
    component: DashboardComponent
  },
  {
    path: "people",
    component: PeopleComponent
  },
  { path: '**', redirectTo: '/dashboard', pathMatch: 'full' },
]
