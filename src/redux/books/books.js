const ADD_BOOK = 'BOOKSTORE/books/ADD_BOOK';
const REMOVE_BOOK = 'BOOKSTORE/books/REMOVE_BOOK';

// reducers

const books = [
  {
    id: '1',
    title: 'Death And The KingsHorseman',
    author: 'Prof. Wole Soyinka',

  },
  {
    id: '2',
    title: 'The Trials of Brother Jero',
    author: 'Prof. Wole Soyinka',

  },
];

export const addBooks = (text) => ({
  type: ADD_BOOK,
  payload: text,
});

const booksReducer = (state = books, action) => {
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

export const removeBooks = (id) => ({
  type: REMOVE_BOOK,
  payload: id,
});

export default booksReducer;
