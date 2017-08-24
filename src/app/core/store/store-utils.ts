import {Actions} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/publishReplay';
import {UserAction} from './users/users.actions';

const typeCache: {[label: string]: boolean} = {};
export function type<T>(label: T | ''): T {
  if (typeCache[<string>label]) {
    throw new Error(`Action type "${label}" is not unqiue"`);
  }

  typeCache[<string>label] = true;

  return <T>label;
}

export const createLoadingObservable = (actions: Actions, startActionType: string, finishActionTypes: string[]): Observable<boolean> => {
  return actions
    .ofType(startActionType)
    .mapTo(true)
    .merge(actions
      .ofType(...finishActionTypes)
      .mapTo(false)
    )
    .publishReplay(1)
    .refCount();
};


function createAction(actionType: string, possibleTypes: { [key: string]: string }, payload): { type: string, payload: any } {
  return {
    type: possibleTypes[actionType],
    payload: payload
  };
}

export function configureSuccessAndFailureActions(actionTypes: { [key: string]: string }) {
  return function decorator(target: any, key: string) {
    const successKey = key + '_SUCCESS', failureKey = key + '_FAILURE';
    if (!actionTypes[key] || !actionTypes[successKey] || !actionTypes[failureKey]) {
      throw new Error(`Tried to use 'configureSuccessAndFailureActions' decorator,
      while at least one of the following keys is missing from the object providing valid keys for action types to the decorator factory:
      ${key}, ${successKey}, ${failureKey}`);
    }
    target[key] = function (payload): UserAction {
      return createAction(key, actionTypes, payload);
    };
    target[failureKey] = function (payload): UserAction {
      return createAction(key + '_FAILURE', actionTypes, payload);
    };
    target[successKey] = function (payload): UserAction {
      return createAction(key + '_SUCCESS', actionTypes, payload);
    };
  };
}
