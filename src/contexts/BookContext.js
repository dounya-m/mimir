import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

export const BookContext = createContext();

export const BookProvider = (props) => {
const [books, setBooks] = useState([]);

useEffect(() => {
    axios.get('http://localhost:5000/api/mimir/book')
    .then(response => {
        setBooks(response.data);
    })
    .catch(error => {
        console.log(error);
    });
}, []);

const contextValue = { books };

return (
    <BookContext.Provider value={contextValue}>
    {props.children}
    </BookContext.Provider>
);
};
