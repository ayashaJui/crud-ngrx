import { IBook } from 'src/app/interfaces/book.interfaces';

export interface IBookState {
  books: IBook[];
  isLoading: boolean;
}
