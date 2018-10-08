import { Windows } from './../shared/models/windows.model';
import { WindowsService } from '../shared/services/windows.service';
import { DbService } from './../shared/services/db.service';
import { Component, OnInit } from '@angular/core';
import { Controller } from '../shared/models/controller.model';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public addWindowsBoolean: Boolean = false;
  public newWindowsCheck: Boolean = false;

  public addControllerBoolean: Boolean = false;
  public addFormBoolean: Boolean = false;

  public changeWindowStatus: Boolean = null;

  public controllers: Controller[];

  public newWindows: Windows;
  public newController: Controller;

  newControllerForm = new FormGroup({
    name: new FormControl(''),
    ip: new FormControl('')
  });

  newFormWindows = new FormGroup({
    name: new FormControl(''),
    status: new FormControl(this.newWindowsCheck)
  });

  constructor(
    private dbService: DbService,
    private windowsService: WindowsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getControllers();
  }

  public getControllers(): void {
    this.dbService.getAllControllers().subscribe((response: Controller[]) => {
      console.log(response);
      this.controllers = response;
      if (this.controllers.length < 5) {
        this.addControllerBoolean = true;
      }
    });
  }

  public updateController(controller: Controller): void {
    this.dbService.updateController(controller).subscribe((response: any) => response);
  }

  public changeStatus(windows: Windows, controller: Controller) {
    this.changeWindowStatus = windows.status;

    if (this.changeWindowStatus === false) {
      //this.openWindow();
      windows.status = true;
    } else {
      //this.closeWindow();
      windows.status = false;
    }
    this.updateController(controller);
  }

  public addNewWindows(controller: Controller): void {
    this.newWindows = new Windows(controller.windows.length + 1, this.newFormWindows.get('name').value , this.newWindowsCheck);

    controller.windows.push(this.newWindows);
    this.updateController(controller);

  }

  public openWindows(): void {
    this.windowsService.openWindows().subscribe((response: any) => response);
  }
  public closeWindow(): void {
    this.windowsService.closeWindows().subscribe((response: any) => response);
  }

  public addWindowsController(): void {
    this.addWindowsBoolean = !this.addWindowsBoolean;
  }
  public addController(): void {
    this.addFormBoolean = !this.addFormBoolean;
  }

  public addNewController(): void {
    this.newController = new Controller(
      null,
      this.newControllerForm.get('name').value,
      this.newControllerForm.get('ip').value
    );
    this.dbService.newController(this.newController).subscribe((data: any) => {
      location.reload();
    });
  }


}
