import { Windows } from './../shared/models/windows.model';
import { WindowsService } from '../shared/services/windows.service';
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
  public addWindowsBoolean: Boolean = false;
  public newWindowsCheck: Boolean = false;

  public editControllerBoolean: Boolean = false;
  public saveDeleteBoolean: Boolean = false;

  public addControllerBoolean: Boolean = false;
  public addFormBoolean: Boolean = false;

  public changeWindowStatus: Boolean = null;

  public controllers: Controller[];

  public newWindows: Windows;
  public newController: Controller;

  newControllerForm = new FormGroup({
    name: new FormControl(),
    ip: new FormControl()
  });

  newFormWindows = new FormGroup({
    name: new FormControl(''),
    status: new FormControl(this.newWindowsCheck)
  });

  constructor(private dbService: DbService, private windowsService: WindowsService) {}

  ngOnInit() {
    this.getControllers();
    this.newControllerForm.controls['name'].disable();
    this.newControllerForm.controls['ip'].disable();
  }

  public getControllers(): void {
    this.dbService.getAllControllers().subscribe((response: Controller[]) => {
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
    this.newWindows = new Windows(
      controller.windows.length + 1,
      this.newFormWindows.get('name').value,
      this.newWindowsCheck
    );

    controller.windows.push(this.newWindows);
    this.updateController(controller);
    location.reload();
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
    if (this.editControllerBoolean === false) {
      this.editController(this.editControllerBoolean);
    }
  }

  public addNewController(): void {
    this.newController = new Controller(
      null,
      this.newControllerForm.get('name').value,
      this.newControllerForm.get('ip').value
    );

    if (
      this.newControllerForm.get('name').value != null &&
      this.newControllerForm.get('ip').value != null
    ) {
      this.dbService.newController(this.newController).subscribe((data: any) => {
        location.reload();
      });
    }
  }

  public editController(status: Boolean): void {
    if (status === true) {
      this.newControllerForm.controls['name'].disable();
      this.newControllerForm.controls['ip'].disable();
      this.editControllerBoolean = false;
      this.saveDeleteBoolean = false;
    } else {
      this.newControllerForm.controls['name'].enable();
      this.newControllerForm.controls['ip'].enable();
      this.editControllerBoolean = true;
      this.saveDeleteBoolean = true;
    }
  }

  public updateControllerInfo(controller: Controller): void {
    if (this.newControllerForm.get('name').value != null) {
      controller.name = this.newControllerForm.get('name').value;
    }
    if (this.newControllerForm.get('ip').value != null) {
      controller.ip = this.newControllerForm.get('ip').value;
    }
    this.updateController(controller);
    location.reload();
  }

  public updateWindows(controller: Controller): void {
    this.updateController(controller);
    location.reload();
 }

  public deleteController(controller: Controller): void {
    this.dbService.deleteController(controller).subscribe((data: any) => {
      location.reload();
    });
  }

  public deleteWindows(windows: Windows, controller: Controller): void {
    let i = 1;
    controller.windows.splice(controller.windows.indexOf(windows), 1);

    controller.windows.forEach(item => {
      item.id = i;
      i++;
    });
    this.updateController(controller);
  }
}
