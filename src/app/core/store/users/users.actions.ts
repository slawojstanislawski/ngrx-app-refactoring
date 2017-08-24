import {Action} from '@ngrx/store';
import {IUser} from './users.model';
import {configureSuccessAndFailureActions, type} from '../store-utils';

export const ActionTypes = {
  GET_ALL_USERS: type('[User] Get All Users'),
  GET_ALL_USERS_SUCCESS: type('[User] Get All Users Success'),
  GET_ALL_USERS_FAILURE: type('[User] Get All Users Failure'),
  GET_USER_DETAILS: type('[User] Get User Details'),
  GET_USER_DETAILS_SUCCESS: type('[User] Get User Details Success'),
  GET_USER_DETAILS_FAILURE: type('[User] Get User Details Failure'),
};

export interface UserAction extends Action {
  payload?: any;
}

export class Actions {
  @configureSuccessAndFailureActions(ActionTypes)
  static GET_ALL_USERS: (payload?: any) => UserAction;
  static GET_ALL_USERS_SUCCESS: (payload: IUser[]) => UserAction;
  static GET_ALL_USERS_FAILURE: (payload: any) => UserAction;
  @configureSuccessAndFailureActions(ActionTypes)
  static GET_USER_DETAILS: (payload: number) => UserAction;
  static GET_USER_DETAILS_SUCCESS: (payload: IUser) => UserAction;
  static GET_USER_DETAILS_FAILURE: (payload: any) => UserAction;
}
