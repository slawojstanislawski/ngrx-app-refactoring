import * as userActions from './users.actions';
import {initialUsersState, IUsersState, UsersState} from './users.model';
import {createSelector, createFeatureSelector} from '@ngrx/store/src';
import {StateItem} from '../state.item';

export function reducer(state: IUsersState = initialUsersState, action: userActions.UserAction): IUsersState {
  switch (action.type) {
    case userActions.ActionTypes.GET_ALL_USERS:
      return new UsersState(state, {
        users: new StateItem().setLoading()
      });

    case userActions.ActionTypes.GET_ALL_USERS_SUCCESS:
      return new UsersState(state, {
        users: new StateItem().setData(action.payload)
      });

    case userActions.ActionTypes.GET_ALL_USERS_FAILURE:
      return new UsersState(state, {
        users: new StateItem().setError(action.payload)
      });

    case userActions.ActionTypes.GET_USER_DETAILS:
      return new UsersState(state, {
        userDetails: new StateItem().setLoading()
      });

    case userActions.ActionTypes.GET_USER_DETAILS_SUCCESS:
      return new UsersState(state, {
        userDetails: new StateItem().setData(action.payload)
      });

    case userActions.ActionTypes.GET_USER_DETAILS_FAILURE:
      return new UsersState(state, {
        userDetails: new StateItem().setError(action.payload)
      });

    default:
      return state;
  }
}

export const getUsersState = createFeatureSelector<IUsersState>('users');

export const getUsers = createSelector(
  getUsersState,
  (state: IUsersState) => state.users
);
export const getUserDetails = createSelector(
  getUsersState,
  (state: IUsersState) => state.userDetails
);
