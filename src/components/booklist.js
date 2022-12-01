import React, { PureComponent } from 'react';
import Book from './book';
import Bookform from './bookform';
import { useSelector } from 'react-redux';
class Booklist extends PureComponent {
  render() {
    const books = useSelector((state) => state.book);

    return (
      <>
        <ul className="booklist">
          {books.map((book) => (
            <Book
              key={book.id}
              title={book.title}
              author={book.author}
            />
          ))}
        </ul>
        <Bookform />
      </>
    );
  }
}

export default Booklist;
