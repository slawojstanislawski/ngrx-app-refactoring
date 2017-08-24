import {Component, Input} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {User} from '../../../core/store/users';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html'
})
export class UserDetailsComponent {
  @Input() userDetails$: Observable<User>;
  @Input() loading$: Observable<boolean>;
  @Input() error$: Observable<any>;

  constructor() {
  }
}
