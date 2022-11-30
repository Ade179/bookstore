import React from 'react';
import { useSelector } from 'react-redux';
import Book from './book';
import Bookform from './bookform';

const Booklist = () => {
  const myBooks = useSelector((state) => state.books);

  return (
    <>
      <ul className="booklist">
        {myBooks.map((myBook) => (
          <Book
            key={myBook.id}
            title={myBook.title}
            author={myBook.author}
          />
        ))}
      </ul>
      <Bookform />
    </>
  );
};

export default Booklist;
