import { Injectable } from '@angular/core';
import { IBook } from '../interfaces/book.interfaces';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private bookList: IBook[] = [
    {
      id: Math.random(),
      name: 'Book 1',
    },
    {
      id: Math.random(),
      name: 'Book 2',
    },
  ];

  constructor() {}

  getBooks(): Observable<IBook[]> {
    return of(this.bookList);
  }

  createBook(book: IBook): Observable<IBook> {
    this.bookList = [...this.bookList, book];

    return of(book);
  }

  updateBook(updateBook: IBook): Observable<IBook> {
    this.bookList.map((book) =>
      book.id === updateBook.id ? updateBook : book
    );

    return of(updateBook);
  }

  deleteBook(book: IBook): Observable<IBook> {
    this.bookList = this.bookList.filter((b) => b.id !== book.id);

    return of(book);
  }
}
