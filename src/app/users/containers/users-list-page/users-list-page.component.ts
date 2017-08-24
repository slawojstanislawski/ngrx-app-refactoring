import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';
import * as fromRoot from '../../../core/store/index';
import * as fromUsers from '../../../core/store/users';

@Component({
  templateUrl: './users-list-page.component.html'
})
export class UsersListPageComponent implements OnInit {
  users$: Observable<fromUsers.User[]>;
  loading$: Observable<boolean>;
  error$: Observable<any>;

  constructor(private store: Store<fromRoot.RootState>,
              private router: Router) {
  }

  ngOnInit() {
    this.users$ = this.store.select(fromUsers.getUsers);
    this.loading$ = this.store.select(fromUsers.getUsersLoading);
    this.error$ = this.store.select(fromUsers.getUsersError);
    this.store.dispatch(new fromUsers.GetAllUsersAction());
  }

  goToDashboard() {
    this.router.navigate(['users/dashboard']);
  }
}
