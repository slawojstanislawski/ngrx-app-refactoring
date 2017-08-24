import {Injectable} from '@angular/core';
import {Effect, Actions} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import {UsersBackend} from '../../../users/users.backend';
import * as usersActions from './users.actions';
import {createLoadingObservable} from '../store-utils';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

@Injectable()
export class UsersEffects {

  @Effect()
  getUsers$: Observable<usersActions.Actions> = this.actions$
    .ofType(usersActions.ActionTypes.GET_ALL_USERS)
    .switchMap((action: usersActions.Actions) => this.usersBackend.getAllUsers()
      .map((response) => new usersActions.GetAllUsersSuccessAction(response))
      .catch(error => Observable.of(new usersActions.GetAllUsersFailureAction(error)))
    );

  @Effect({dispatch: false})
  usersLoading$: Observable<boolean> = createLoadingObservable(
    this.actions$,
    usersActions.ActionTypes.GET_ALL_USERS,
    [
      usersActions.ActionTypes.GET_ALL_USERS_SUCCESS,
      usersActions.ActionTypes.GET_ALL_USERS_FAILURE
    ]);

  @Effect()
  getUserDetails$: Observable<usersActions.Actions> = this.actions$
    .ofType(usersActions.ActionTypes.GET_USER_DETAILS)
    .switchMap((action: usersActions.Actions) => this.usersBackend.getUserDetails(action.payload)
      .map((response) => new usersActions.GetUserDetailsSuccessAction(response))
      .catch(error => Observable.of(new usersActions.GetUserDetailsFailureAction(error)))
    );

  @Effect({dispatch: false})
  userDetailsLoading$: Observable<boolean> = createLoadingObservable(
    this.actions$,
    usersActions.ActionTypes.GET_USER_DETAILS,
    [
      usersActions.ActionTypes.GET_USER_DETAILS_SUCCESS,
      usersActions.ActionTypes.GET_USER_DETAILS_FAILURE
    ]);

  constructor(private actions$: Actions,
              private usersBackend: UsersBackend) {
  }
}
