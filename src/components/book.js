import React, { PureComponent } from 'react';
import './CSSmodules/books.css';
import PropTypes from 'prop-types';

class Book extends PureComponent {
  render() {
    const { title, author } = this.props;
    return (
      <div className="bookContainer">
        <ul>
          <li className="texts">
            {title}
            {' '}
            by
            {author}
          </li>
        </ul>
        <button className="rmv" type="submit">Remove</button>
      </div>
    );
  }
}

Book.propTypes = ({
  title: PropTypes.string,
  author: PropTypes.string,
}).isRequired;

export default Book;
