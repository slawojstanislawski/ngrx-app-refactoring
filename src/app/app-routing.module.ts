import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'users'
  },
  {
    path: 'users',
    loadChildren: 'app/users/users.module#UsersModule'
  }
];

export const appRouting = RouterModule.forRoot(appRoutes);

@NgModule({
  imports: [
    appRouting
  ],
  providers: [],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
