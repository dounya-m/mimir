import React, { useContext, useEffect, useState } from 'react';
import BookContext from '../../../contexts/BookContext';

function FilterBooks() {
  const { setSelectedCategory, setSelectedYear } = useContext(BookContext);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/mimir/categories'); // Update this URL with the appropriate API endpoint for categories
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  return (
    <div className="flex flex-col gap-4">
      <select
        className="px-1 py-2 text-xs bg-transparent border-2 border-black rounded-md"
        name="category"
        onChange={handleCategoryChange}
      >
        <option value="">Category</option>
        {categories.map((category) => (
          <option key={category.id} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>
      <select
        className="px-1 py-2 text-xs bg-transparent border-2 border-black rounded-md"
        name="year"
        onChange={handleYearChange}
      >
        <option value="">Year</option>
        {/* Add year options as needed */}
      </select>
      {/* <select className='px-1 py-2 text-xs bg-transparent border-2 border-black rounded-md' name="rental-option">
            <option value="small">Languages</option>
      </select> */}
    </div>
  );
}

export default FilterBooks;
