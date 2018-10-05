import { DbService } from './../shared/services/db.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { WindowService } from '../shared/services/window.service';


@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ],
  declarations: [DashboardComponent],
  providers: [DbService, WindowService],
  exports: []
})
export class DashboardModule {}
