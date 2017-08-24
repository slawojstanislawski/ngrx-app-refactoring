import * as userActions from './users.actions';
import {initialUsersState, IUsersState, UsersState} from './users.model';
import {createSelector, createFeatureSelector} from '@ngrx/store/src';

export function reducer(state: IUsersState = initialUsersState, action: userActions.Actions): IUsersState {
  switch (action.type) {
    case userActions.ActionTypes.GET_ALL_USERS:
      return new UsersState(state, {
        users: [],
        usersError: null
      });

    case userActions.ActionTypes.GET_ALL_USERS_SUCCESS:
      return new UsersState(state, {
        users: action.payload,
      });

    case userActions.ActionTypes.GET_ALL_USERS_FAILURE:
      return new UsersState(state, {
        usersError: action.payload
      });

    case userActions.ActionTypes.GET_USER_DETAILS:
      return new UsersState(state, {
        userDetails: null,
        userDetailsError: null
      });

    case userActions.ActionTypes.GET_USER_DETAILS_SUCCESS:
      return new UsersState(state, {
        userDetails: action.payload,
      });

    case userActions.ActionTypes.GET_USER_DETAILS_FAILURE:
      return new UsersState(state, {
        userDetailsError: action.payload
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
export const getUsersError = createSelector(
  getUsersState,
  (state: IUsersState) => state.usersError
);
export const getUserDetails = createSelector(
  getUsersState,
  (state: IUsersState) => state.userDetails
);
export const getUserDetailsError = createSelector(
  getUsersState,
  (state: IUsersState) => state.userDetailsError
);
