import React, { PureComponent } from "react";

class Bookform extends PureComponent{
    render(){
        return(
            <>
            <div className="booktext">ADD NEW BOOK</div>
            <form className="bookform">
          <input type="text" name="title" placeholder="Book title"></input>
          <input type="text" name = "author" placeholder = "author"></input>
          <button className="newbook">ADD BOOK</button>
          </form>
            </>
        )
    }
}

export default Bookform