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
  userDetails$: Observable<fromUsers.User>;
  loading$: Observable<boolean>;
  error$: Observable<any>;

  constructor(private store: Store<fromRoot.RootState>,
              private router: Router) {
  }

  ngOnInit() {
    this.userDetails$ = this.store.select(fromUsers.getUserDetails);
    this.users$ = this.store.select(fromUsers.getUsers);
    this.loading$ = this.store.select(fromUsers.getLoading);
    this.error$ = this.store.select(fromUsers.getError);
    this.store.dispatch(new fromUsers.GetUserDetailsAction(1));
    this.store.dispatch(new fromUsers.GetAllUsersAction());
  }

  backToList() {
    this.router.navigate(['users/list']);
  }
}
