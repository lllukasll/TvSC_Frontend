import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppState, selectAuthState } from '../../../store/app.states';
import { Store } from '@ngrx/store';
import { Logout } from '../../../store/actions/auth.actions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  getState: Observable<any>;
  isAuthenticated: false;
  errorMessage: string | null;

  constructor(private store: Store<AppState>) {
    this.getState = this.store.select(selectAuthState);
  }

  ngOnInit() {
    this.getState.subscribe((state) => {
      this.isAuthenticated = state.isAuthenticated;
      this.errorMessage = state.errorMessage;
    })
  }

  logout() {
    this.store.dispatch(new Logout())
  }

}
