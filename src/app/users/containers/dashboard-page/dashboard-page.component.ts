import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';
import {StateItem} from '../../../core/store/state.item';
import * as fromRoot from '../../../core/store/index';
import * as fromUsers from '../../../core/store/users';

@Component({
  templateUrl: './dashboard-page.component.html'
})
export class DashboardPageComponent implements OnInit {
  users$: Observable<StateItem<fromUsers.User[]>>;
  userDetails$: Observable<StateItem<fromUsers.User>>;

  constructor(private store: Store<fromRoot.RootState>,
              private router: Router) {
  }

  ngOnInit() {
    this.users$ = this.store.select(fromUsers.getUsers);
    this.userDetails$ = this.store.select(fromUsers.getUserDetails);
    this.store.dispatch(fromUsers.Actions.GET_USER_DETAILS(1));
    this.store.dispatch(fromUsers.Actions.GET_ALL_USERS());
  }

  backToList() {
    this.router.navigate(['users/list']);
  }
}
