import React, { useState, useEffect } from 'react';

const BookContext = React.createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  const fetchBooks = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/mimir/book');
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <BookContext.Provider value={{ books, searchQuery, setSearchQuery, selectedCategory, setSelectedCategory, selectedYear, setSelectedYear  }}>
      {children}
    </BookContext.Provider>
  );
};

export default BookContext;
