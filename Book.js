import React from 'react'


const Book = ({ title, author }) => 
{
    console.log(title, author); 
    return (
        <div className="book">
        <h3>{title}</h3>
        <p>by {author}</p>
        
       </div>
    );
    
    /**const Book = (props) => {
        return (
            <div className="book">
                <h3>{props.title}</h3>
                <p>by {props.author}</p>
            </div>
        );
    };**/


};

export default Book;