import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-container',
  templateUrl: './admin-container.component.html',
  styleUrls: ['./admin-container.component.scss']
})
export class AdminContainerComponent implements OnInit {
  navbarOpen : boolean;

  constructor() {
    this.navbarOpen = true;
  }

  ngOnInit() {
  }

  onNavbarChanged(navbarState) {
    this.navbarOpen = navbarState;
  }
}
