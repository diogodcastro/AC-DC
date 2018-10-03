import { ReportsComponent } from './reports.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsRoutingModule } from './reports-routing.module';


@NgModule({
  imports: [
    CommonModule,
    ReportsRoutingModule
  ],
  declarations: [ReportsComponent],
  providers: [],
  exports: []
})
export class ReportsModule {}
