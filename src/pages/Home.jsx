    import React from 'react'
    import SearchInput from '../components/commun/itemes/SearchInput'
    import RecentBook from '../components/books/books/RecentBooks'
    import BookofWeek from '../components/books/books/BookofWeek'
    import {BookContext} from '../contexts/BookContext'
    
    function Home() {
      return (

        <BookContext.Provider>
        <div>
          <div className='relative flex flex-col items-center justify-start w-[70vw] mx-auto'>
            <p className='bg-[#54BAB9] w-[100px] h-[100px] rounded-full absolute -z-10 left-[23vw] -top-1'></p>
              <h1 className='tracking-wide text-center lg:text-4xl Bosca sm:text-3xl'>
                A Reader Lives a<br/>Thousand Lives Before<br/>he Dies.
              </h1>
          </div>
          <div className='my-[2rem]'>
            <SearchInput />
          </div>
          <div className='flex flex-col gap-8'>
            <section>
              <RecentBook />
            </section>
            <section>
              <BookofWeek />
            </section>
          </div>
        </div>
        </BookContext.Provider>

      )
    }
    
    export default Home
    