const ADD_BOOK = 'BOOKSTORE/book/ADD_BOOK';
const REMOVE_BOOK = 'BOOKSTORE/book/REMOVE_BOOK';

export const addBooks = (text) => ({
  type: ADD_BOOK,
  payload: text,
});

export const removeBooks = (text) => ({
  type: REMOVE_BOOK,
  payload: text,
});

// reducers

const initialState = [];

const booksReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_BOOK:
      return [...state, payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== payload);
    default:
      return state;
  }
};

export default booksReducer;
