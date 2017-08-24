import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {User} from '../core/store/users/users.model';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';

@Injectable()
export class UsersBackend {

  constructor() {
  }

  private users: User[] = [
    new User({
      id: 1,
      firstName: 'Fryderyk',
      lastName: 'Chopin'
    }),
    new User({
      id: 2,
      firstName: 'Johannes',
      lastName: 'Brahms'
    }),
    new User({
      id: 3,
      firstName: 'Joseph',
      lastName: 'Haydn'
    })
  ];

  getAllUsers(): Observable<User[]> {
    return Observable.of(this.users).delay(2000);
  }

  getUserDetails(id: number): Observable<User> {
    const foundUser = this.users.find(user => user.id === id);
    return Observable.of(foundUser).delay(4000);
  }
}
