import { Action, createReducer, on } from '@ngrx/store';
import { IBookState } from 'src/app/component/book/book.model';
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

const initialBookState: IBookState = {
  books: [],
  isLoading: false,
};

export const bookReducer = createReducer<IBookState>(
  initialBookState,
  on(getBooks, (state) => {
    return {
      ...state,
      isLoading: false,
    };
  }),

  on(getBooksSuccess, (state, { books }) => {
    return {
      ...state,
      isLoading: false,
      books,
    };
  }),
  on(createBook, (state) => {
    return {
      ...state,
      isLoading: false,
    };
  }),
  on(createBookSuccess, (state, { book }) => {
    return {
      ...state,
      isLoading: false,
      book,
    };
  }),
  on(updateBook, (state) => {
    return {
      ...state,
      isLoading: false,
    };
  }),
  on(updateBookSuccess, (state, { book }) => {
    return {
      ...state,
      isLoading: false,
      books: state.books.map((b) => (b.id === book.id ? book : b)),
    };
  }),
  on(deleteBook, (state) => {
    return {
      ...state,
      isLoading: false,
    };
  }),
  on(deleteBookSuccess, (state, { book }) => {
    return {
      ...state,
      isLoading: false,
      books: state.books.filter((b) => b.id !== book.id),
    };
  })
);
