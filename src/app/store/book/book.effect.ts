import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { map, switchMap } from 'rxjs/operators';

import { BookService } from 'src/app/services/book.service';
import {
  createBook,
  createBookSuccess,
  deleteBook,
  deleteBookSuccess,
  getBooks,
  getBooksSuccess,
  updateBook,
  updateBookSuccess,
} from './books.actions';
import { IBook } from 'src/app/interfaces/book.interfaces';

@Injectable()
export class BooksEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly bookService: BookService
  ) {}

  getBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getBooks.type),
      switchMap(() => this.bookService.getBooks()),
      map((books: IBook[]) => getBooksSuccess({ books }))
    )
  );

  createBook$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createBook.type),
      switchMap(({ book }) => this.bookService.createBook(book)),
      map((book: IBook) => createBookSuccess({ book }))
    )
  );

  updateBook$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateBook.type),
      switchMap(({ book }) => this.bookService.updateBook(book)),
      map((book: IBook) => updateBookSuccess({ book }))
    )
  );

  deleteBook$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteBook.type),
      switchMap(({ book }) => this.bookService.deleteBook(book)),
      map((book: IBook) => deleteBookSuccess({ book }))
    )
  );
}
