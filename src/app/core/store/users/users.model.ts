import {StateItem} from '../state.item';

export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
}

export class User implements IUser {
  id: number;
  firstName: string;
  lastName: string;

  constructor(userData: any) {
    Object.assign(this, userData);
  }
}

export interface IUsersState {
  users: StateItem<IUser[]>;
  userDetails: StateItem<IUser>;
}

export class UsersState implements IUsersState {
  users: StateItem<IUser[]>;
  userDetails: StateItem<IUser>;

  constructor(currentState: IUsersState, newState: any) {
    Object.assign(this, currentState, newState);
  }
}

export const initialUsersState: IUsersState = {
  users: new StateItem<IUser[]>().setData(null),
  userDetails: new StateItem<IUser>().setData(null),
};
