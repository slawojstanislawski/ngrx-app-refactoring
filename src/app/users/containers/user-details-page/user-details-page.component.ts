import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute, Router} from '@angular/router';
import * as fromRoot from '../../../core/store/index';
import * as fromUsers from '../../../core/store/users';

@Component({
  templateUrl: './user-details-page.component.html'
})
export class UserDetailsPageComponent implements OnInit {
  userDetails$: Observable<fromUsers.User>;
  loading$: Observable<boolean>;
  error$: Observable<any>;

  constructor(private store: Store<fromRoot.RootState>,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.userDetails$ = this.store.select(fromUsers.getUserDetails);
    this.loading$ = this.store.select(fromUsers.getLoading);
    this.error$ = this.store.select(fromUsers.getError);
    const userId = +this.route.snapshot.params['id'];
    this.store.dispatch(new fromUsers.GetUserDetailsAction(userId));
  }

  backToList() {
    this.router.navigate(['users/list']);
  }
}
