import {Injectable} from '@angular/core';
import {Effect, Actions} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import {UsersBackend} from '../../../users/users.backend';
import * as usersActions from './users.actions';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

@Injectable()
export class UsersEffects {

  @Effect()
  getUsers$: Observable<usersActions.UserAction> = this.actions$
    .ofType(usersActions.ActionTypes.GET_ALL_USERS)
    .switchMap((action: usersActions.UserAction) => this.usersBackend.getAllUsers()
      .map((response) => usersActions.Actions.GET_ALL_USERS_SUCCESS(response))
      .catch(error => Observable.of(usersActions.Actions.GET_ALL_USERS_FAILURE(error)))
    );

  @Effect()
  getUserDetails$: Observable<usersActions.UserAction> = this.actions$
    .ofType(usersActions.ActionTypes.GET_USER_DETAILS)
    .switchMap((action: usersActions.UserAction) => this.usersBackend.getUserDetails(action.payload)
      .map((response) => usersActions.Actions.GET_USER_DETAILS_SUCCESS(response))
      .catch(error => Observable.of(usersActions.Actions.GET_USER_DETAILS_FAILURE(error)))
    );

  constructor(private actions$: Actions,
              private usersBackend: UsersBackend) {
  }
}
