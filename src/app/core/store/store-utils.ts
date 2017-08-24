import {Actions} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/publishReplay';

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
