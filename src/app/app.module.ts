import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BookComponent } from './component/book/book.component';
import { bookReducer } from './store/book/book.reducers';
import { BooksEffects } from './store/book/book.effect';

@NgModule({
  declarations: [AppComponent, BookComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot(
      {
        book: bookReducer,
      },
      {}
    ),
    EffectsModule.forRoot([BooksEffects]),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
