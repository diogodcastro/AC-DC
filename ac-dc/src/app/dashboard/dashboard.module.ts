import { DbService } from './../shared/services/db.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { WindowsService } from '../shared/services/windows.service';


@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ],
  declarations: [DashboardComponent],
  providers: [DbService, WindowsService],
  exports: []
})
export class DashboardModule {}
