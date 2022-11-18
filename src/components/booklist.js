import React, { PureComponent } from "react";
import Book from "./book";
import Bookform from "./bookform";
class Booklist extends PureComponent {
    render(){
        const myBooks = [
            {
                id:'1',
                title:'The Beatification Of Area Boys',
                author: 'Prof. Wole Soyinka'

            },
            {
                id:'2',
                title:'Death And The KingsHorseman',
                author: 'Prof. Wole Soyinka'

            },
            {
                id:'3',
                title:'The Trials of Brother Jero',
                author: 'Prof. Wole Soyinka'

            }
        ]

        return (
            <>
          <ul className="booklist">
      {myBooks.map((myBook) => <Book key={myBook.id} title={myBook.title} author={myBook.author} />)}
    </ul>
    <Bookform />
            </>
        )
    }
    
}

export default Booklist