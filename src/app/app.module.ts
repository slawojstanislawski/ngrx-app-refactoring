import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {INITIAL_STATE, StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {reducers, initialRootState} from './core/store';
import {UsersEffects} from './core/store/users';
import {UsersModule} from './users/users.module';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdToolbarModule} from '@angular/material';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {initialState: <any>INITIAL_STATE}),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
    UsersModule,
    EffectsModule.forRoot([
      UsersEffects
    ]),
    StoreRouterConnectingModule,
    BrowserAnimationsModule,
    MdToolbarModule
  ],
  providers: [
    {provide: INITIAL_STATE, useFactory: initialRootState}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
