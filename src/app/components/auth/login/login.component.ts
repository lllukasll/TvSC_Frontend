import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user';
import { AppState } from '../../../store/app.states';
import { Store } from '@ngrx/store';
import { LogIn } from '../../../store/actions/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: User = new User();

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  onSubmit() {
    const payload = {
      email: this.user.email,
      password: this.user.password
    };
    this.store.dispatch(new LogIn(payload));
  }

}
