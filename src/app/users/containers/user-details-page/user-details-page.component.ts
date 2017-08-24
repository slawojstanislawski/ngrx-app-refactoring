import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute, Router} from '@angular/router';
import {StateItem} from '../../../core/store/state.item';
import * as fromRoot from '../../../core/store/index';
import * as fromUsers from '../../../core/store/users';

@Component({
  templateUrl: './user-details-page.component.html'
})
export class UserDetailsPageComponent implements OnInit {
  userDetails$: Observable<StateItem<fromUsers.User>>;

  constructor(private store: Store<fromRoot.RootState>,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.userDetails$ = this.store.select(fromUsers.getUserDetails);
    const userId = +this.route.snapshot.params['id'];
    this.store.dispatch(fromUsers.Actions.GET_USER_DETAILS(userId));
  }

  backToList() {
    this.router.navigate(['users/list']);
  }
}
