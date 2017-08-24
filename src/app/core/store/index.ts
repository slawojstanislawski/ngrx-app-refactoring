import {IUsersState, reducer, initialUsersState} from './users';

export interface RootState {
  users: IUsersState;
}

export const reducers = {
  users: reducer,
};

export const initialRootState = (): RootState => ({
    users: initialUsersState
  });
