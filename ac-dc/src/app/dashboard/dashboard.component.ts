import { Component, OnInit } from '@angular/core';
import { Controller } from '../shared/models/controller.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  controllers: [Controller];

  constructor() { }

  ngOnInit() {
  }

}
