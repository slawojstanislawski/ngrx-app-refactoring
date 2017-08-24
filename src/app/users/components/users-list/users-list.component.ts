import {Component, Input} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';
import {User} from '../../../core/store/users';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html'
})
export class UsersListComponent {
  @Input() users$: Observable<User[]>;
  @Input() loading$: Observable<boolean>;
  @Input() error$: Observable<any>;

  constructor(private router: Router) {
  }

  goToDetails(id: number) {
    this.router.navigate([`users/${id}`]);
  }
}
