import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';
import * as fromRoot from '../../../core/store/index';
import * as fromUsers from '../../../core/store/users';

@Component({
  templateUrl: './dashboard-page.component.html'
})
export class DashboardPageComponent implements OnInit {
  users$: Observable<fromUsers.User[]>;
  usersLoading$: Observable<boolean>;
  usersError$: Observable<any>;
  userDetails$: Observable<fromUsers.User>;
  userDetailsLoading$: Observable<boolean>;
  userDetailsError$: Observable<any>;

  constructor(private store: Store<fromRoot.RootState>,
              private router: Router,
              private userEffects: fromUsers.UsersEffects) {
  }

  ngOnInit() {
    this.users$ = this.store.select(fromUsers.getUsers);
    this.usersLoading$ = this.userEffects.usersLoading$;
    this.usersError$ = this.store.select(fromUsers.getUsersError);
    this.userDetails$ = this.store.select(fromUsers.getUserDetails);
    this.userDetailsLoading$ = this.userEffects.userDetailsLoading$;
    this.userDetailsError$ = this.store.select(fromUsers.getUserDetailsError);
    this.store.dispatch(fromUsers.Actions.GET_USER_DETAILS(1));
    this.store.dispatch(fromUsers.Actions.GET_ALL_USERS());
  }

  backToList() {
    this.router.navigate(['users/list']);
  }
}
