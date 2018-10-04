import { DbService } from './../shared/services/db.service';
import { Component, OnInit } from '@angular/core';
import { Controller } from '../shared/models/controller.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public controllers: Controller[];

  constructor(private dbService: DbService) { }

  ngOnInit() {
    this.getControllers();
  }

  public getControllers(): void {
    this.dbService.getAllControllers().subscribe((response: Controller[]) => {
      console.log(response);
      this.controllers = response;
    });
  }

  public changeStatus(): void {
    console.log('here: go');
  }

}
