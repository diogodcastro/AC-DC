import { WindowService } from './../shared/services/window.service';
import { Window } from './../shared/models/window.model';
import { DbService } from './../shared/services/db.service';
import { Component, OnInit } from '@angular/core';
import { Controller } from '../shared/models/controller.model';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public addWindow: boolean = false;

  public changeWindowStatus: boolean = null;

  public controllers: Controller[];

  public newWindow: Window;

  newEquipment = new FormGroup({
    name: new FormControl(''),
    status: new FormControl(false)
  });

  constructor(private dbService: DbService, private windowService: WindowService) {}

  ngOnInit() {
    this.getControllers();
  }

  public getControllers(): void {
    this.dbService.getAllControllers().subscribe((response: Controller[]) => {
      console.log(response);
      this.controllers = response;
    });
  }

  public updateController(controller: Controller): void {
    this.dbService.updateController(controller).subscribe((data: any) => data);
  }

  public changeStatus(window: Window, controller: Controller) {
    this.changeWindowStatus = window.status;

    if (this.changeWindowStatus === false) {
      this.openWindow();
      window.status = true;
    } else {
      this.closeWindow();
      window.status = false;
    }
    //this.updateController(controller);
  }

  public openWindow(): void {
    this.windowService.openWindow().subscribe((response: any) => response);
  }
  public closeWindow(): void {
    this.windowService.closeWindow().subscribe((response: any) => response);
  }
}
