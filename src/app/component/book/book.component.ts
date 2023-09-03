import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IBook } from 'src/app/interfaces/book.interfaces';
import { selectBooksList } from 'src/app/store/book/book.selectors';
import {
  createBook,
  deleteBook,
  getBooks,
  updateBook,
} from 'src/app/store/book/books.actions';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  books$ = this.store.select(selectBooksList);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.allBooks();
  }

  allBooks() {
    this.store.dispatch(getBooks());
  }

  addBook() {
    const newBook: IBook = {
      name: 'New Book',
      id: Math.random(),
    };
    this.store.dispatch(createBook({ book: newBook }));
    this.allBooks();
  }

  updateBook(book: IBook) {
    const newBook: IBook = {
      name: 'Updated Book',
      id: book.id,
    };
    this.store.dispatch(updateBook({ book: newBook }));
  }

  deleteBook(book: IBook) {
    this.store.dispatch(deleteBook({ book }));
  }
}
