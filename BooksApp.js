import React from 'react';
import Book from './Book';

const BooksApp = () => {

    const books = [
        { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
        { title: '1984', author: 'George Orwell' },
        { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    ];
    console.log(books);
    return (
        <div className="booksapp">
            <h1>My Book List</h1>
            <div className="book-list">
                {books.map((book, index) => {
                    console.log(book);
                    return <Book key={index} title={book.title} author={book.author} />
})}
            </div>
        </div>
    );
};


export default BooksApp;