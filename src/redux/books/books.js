const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

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

const booksReducer = (state = books, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};
export const addBooks = (book) => ({
  type: ADD_BOOK,
  book,
});

export const removeBooks = (id) => ({
  id,
});

export default booksReducer;
