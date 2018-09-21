import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { AppState, selectAuthState } from "../store/app.states";
import { Observable } from "rxjs";

@Injectable()
export class AuthGuardService implements CanActivate {
    getState: Observable<any>;
    isAuthenticated: false;

    constructor(private store: Store<AppState>, public router: Router) {
        this.getState = this.store.select(selectAuthState);
        this.getState.subscribe((state) => {
            this.isAuthenticated = state.isAuthenticated;
        })
    }

    canActivate(): boolean {
        if (!this.isAuthenticated) {
            this.router.navigateByUrl('/user/login');
            return false;
        } 
        return true;
    }
}