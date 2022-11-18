import React, { PureComponent } from 'react'
import './CSSmodules/books.css'
class Book extends PureComponent {
    render(){
        const { title, author } = this.props;
        return (
            <div className='bookContainer'>
                <ul>
                    <li className='texts'>
                        {title} by {author}
                    </li>
                </ul>
                <button className='rmv'>Remove</button>
            </div>
          )
    }
}


export default Book
