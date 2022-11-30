import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import checkStatusReducer from './categories/categories';
import booksReducer from './books/books';

const rootReducer = combineReducers({
  books: booksReducer,
  categories: checkStatusReducer,
});

const store = configureStore({ reducer: rootReducer });
export default store;
