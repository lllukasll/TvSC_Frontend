import { Component, OnInit, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.scss']
})
export class AdminSidebarComponent implements OnInit {
  @Output() navbarClicked : EventEmitter<boolean> = new EventEmitter<boolean>();
  navbarOpen = true;

  constructor() { }

  ngOnInit() {
    this.navbarOpen = true;
  }

  toogleNavbar() {
    this.navbarOpen = !this.navbarOpen;
    this.navbarClicked.emit(this.navbarOpen);
  }

}
