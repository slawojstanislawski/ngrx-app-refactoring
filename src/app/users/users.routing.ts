import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {UserDetailsPageComponent} from './containers/user-details-page/user-details-page.component';
import {UsersListPageComponent} from './containers/users-list-page/users-list-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list'
  },
  {
    path: 'list',
    component: UsersListPageComponent
  },
  {
    path: ':id',
    component: UserDetailsPageComponent
  }
];
export const usersRouting: ModuleWithProviders = RouterModule.forChild(routes);
