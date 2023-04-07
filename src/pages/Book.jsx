import React from 'react' 
import FilterBooks from '../components/books/filter/FilterBooks'
import RecentBook from '../components/books/books/RecentBooks'
function Book() {
return (
    <div className='flex gap-[3rem]'>
    <div className="basis-[10vw]">
        <FilterBooks />
    </div>
    <div className="basis-full">
        <RecentBook  />
    </div>
    </div>
)
}

export default Book
