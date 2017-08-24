import {Component, Input} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {User} from '../../../core/store/users';
import {StateItem} from '../../../core/store/state.item';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html'
})
export class UserDetailsComponent {
  @Input() userDetails$: Observable<StateItem<User>>;

  constructor() {
  }
}
