import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
  {
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'reports',
    loadChildren: './reports/reports.module#ReportsModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

export const routing: ModuleWithProviders = RouterModule.forRoot(ROUTES);
