import { Component, OnInit } from '@angular/core';
import { RegisterUserModel } from '../../../models/registerUserModel';
import { AppState } from '../../../store/app.states';
import { Store } from '@ngrx/store';
import { SignUp } from '../../../store/actions/auth.actions';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  user: RegisterUserModel = new RegisterUserModel();

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    
  }

  onSubmit() {
    console.log(this.user.userName)
    this.store.dispatch(new SignUp(this.user));
  }

}
