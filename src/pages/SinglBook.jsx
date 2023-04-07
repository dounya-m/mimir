import React from 'react'
import { useParams } from 'react-router-dom'
import BookDetailles from '../components/books/singleBook/BookDetailles'
import Comments from '../components/books/singleBook/Comments'


function SinglBook() {
  const { bookId } = useParams()
  console.log(bookId);
  return (
    <div className='flex flex-col gap-10'>
      <section>
        <BookDetailles bookId={bookId} />
      </section>
      <section className=''>
        <Comments />
      </section>
    </div>
  )
}

export default SinglBook
