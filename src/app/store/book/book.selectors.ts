import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IBookState } from 'src/app/component/book/book.model';

export const selectBookState = createFeatureSelector<IBookState>('book');
export const selectBooksList = createSelector(
  selectBookState,
  (state) => state.books
);
export const selectBookIsLoading = createSelector(
  selectBookState,
  (state) => state.isLoading
);
