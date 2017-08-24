import {MdListModule, MdCardModule, MdProgressSpinnerModule, MdButtonModule} from '@angular/material';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {UsersListComponent} from './components/users-list/users-list.component';
import {UsersBackend} from './users.backend';
import {usersRouting} from './users.routing';
import {UserDetailsComponent} from './components/user-details/user-details.component';
import {UserDetailsPageComponent} from './containers/user-details-page/user-details-page.component';
import {UsersListPageComponent} from './containers/users-list-page/users-list-page.component';
import {DashboardPageComponent} from './containers/dashboard-page/dashboard-page.component';

@NgModule({
  declarations: [
    UsersListComponent,
    UserDetailsComponent,
    UserDetailsPageComponent,
    UsersListPageComponent,
    DashboardPageComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    usersRouting,
    MdListModule,
    MdCardModule,
    MdProgressSpinnerModule,
    MdButtonModule
  ],
  providers: [
    UsersBackend
  ],
  exports: []
})
export class UsersModule {
}
