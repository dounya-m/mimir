import React, { useContext } from 'react';
import search from '../../../assets/icons/search-normal.svg';
import BookContext from '../../../contexts/BookContext';

function SearchInput() {
  const { setSearchQuery } = useContext(BookContext);

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <label className="flex justify-between border-[2px] border-[#2C2C2C] md:w-[30vw] pt-1 pb-1 px-2 rounded-full mx-auto sm:w-[50vw] text-xs">
      <input
        className="placeholder-[#818181] Bosca bg-transparent focus:outline-none p-2"
        placeholder="Search by book or author"
        onChange={handleInputChange}
      />
      <button>
        <img className="bg-[#54BAB9] p-2 rounded-full w-[2rem]" src={search} alt="" />
      </button>
    </label>
  );
}

export default SearchInput;
