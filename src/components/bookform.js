import React, { PureComponent } from 'react';

class Bookform extends PureComponent {
  render() {
    return (
      <>
        <div className="booktext">ADD NEW BOOK</div>
        <form className="bookform">
          <input type="text" name="title" placeholder="Book title" />
          <input type="text" name="author" placeholder="author" />
          <button className="newbook" type="submit">ADD BOOK</button>
        </form>
      </>
    );
  }
}

export default Bookform;
