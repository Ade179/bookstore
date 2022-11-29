import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import checkStatusReducer from './categories/categories';
import booksReducer from './books/books';

const rootReducer = combineReducers({
  Books: booksReducer,
  Categories: checkStatusReducer,
});

const store = configureStore(rootReducer);

export default store;
