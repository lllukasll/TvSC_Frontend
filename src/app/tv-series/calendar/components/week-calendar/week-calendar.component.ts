import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-week-calendar',
  templateUrl: './week-calendar.component.html',
  styleUrls: ['./week-calendar.component.scss']
})
export class WeekCalendarComponent implements OnInit {
  isCollapsed: boolean;

  constructor() {
    this.isCollapsed = false;
  }

  ngOnInit() {
  }

}
