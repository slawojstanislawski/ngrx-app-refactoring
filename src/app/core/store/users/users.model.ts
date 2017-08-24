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
  users: IUser[];
  usersError: any;
  userDetails: IUser;
  userDetailsError: any;
}

export class UsersState implements IUsersState {
  users: IUser[];
  usersError: any;
  userDetails: IUser;
  userDetailsError: any;

  constructor(currentState: IUsersState, newState: any) {
    Object.assign(this, currentState, newState);
  }
}

export const initialUsersState: IUsersState = {
  users: [],
  usersError: null,
  userDetails: null,
  userDetailsError: null
};
