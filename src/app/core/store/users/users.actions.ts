import {Action} from '@ngrx/store';
import {IUser} from './users.model';
import {type} from '../store-utils';

export const ActionTypes = {
  GET_ALL_USERS: type('[User] Get All Users'),
  GET_ALL_USERS_SUCCESS: type('[User] Get All Users Success'),
  GET_ALL_USERS_FAILURE: type('[User] Get All Users Failure'),
  GET_USER_DETAILS: type('[User] Get User Details'),
  GET_USER_DETAILS_SUCCESS: type('[User] Get User Details Success'),
  GET_USER_DETAILS_FAILURE: type('[User] Get User Details Failure'),
};

export class GetAllUsersAction implements Action {
  type = ActionTypes.GET_ALL_USERS;

  constructor(public payload?: any) {
  }
}

export class GetAllUsersSuccessAction implements Action {
  type = ActionTypes.GET_ALL_USERS_SUCCESS;

  constructor(public payload: IUser[]) {
  }
}

export class GetAllUsersFailureAction implements Action {
  type = ActionTypes.GET_ALL_USERS_FAILURE;

  constructor(public payload: any) {
  }
}

export class GetUserDetailsAction implements Action {
  type = ActionTypes.GET_USER_DETAILS;

  constructor(public payload: number) {
  }
}

export class GetUserDetailsSuccessAction implements Action {
  type = ActionTypes.GET_USER_DETAILS_SUCCESS;

  constructor(public payload: IUser) {
  }
}

export class GetUserDetailsFailureAction implements Action {
  type = ActionTypes.GET_USER_DETAILS_FAILURE;

  constructor(public payload: any) {
  }
}

export type Actions
  = GetAllUsersAction
  | GetAllUsersSuccessAction
  | GetAllUsersFailureAction
  | GetUserDetailsAction
  | GetUserDetailsSuccessAction
  | GetUserDetailsFailureAction;
