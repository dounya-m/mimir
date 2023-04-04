import React, { useContext} from 'react'
import {useLocation} from 'react-router-dom' 
import {AiOutlineArrowRight} from 'react-icons/ai'
import H2 from '../../commun/titeles/H2'
// import axios from 'axios'
import {BookContext} from '../../../contexts/BookContext'

function RecentBook() {
    const location = useLocation();
    const isBookPage = location.pathname === "/book";
  return (
    <div >
        {!isBookPage && <H2 className='text-lg font-semibold capitalize Bosca mb-[1rem]'>reccently added</H2>}
        <section className='flex flex-col justify-center gap-6'>
            <SingleBooks  />
            <button className='flex items-center justify-center border-2 w-[25%] mx-auto border-black py-2 text-sm rounded-lg gap-2 hover:shadow-md'>
                All Books <AiOutlineArrowRight isBookPage={isBookPage} />
            </button>
        </section>
    </div>
  )
}

function SingleBooks(isBookPage) {

    // const {books} = useContext(BookContext)
    // const [book, setBook] = useState([])
    
    // useEffect(() => {
    //     axios.get('http://localhost:5000/api/mimir/book')
    //     .then(res => {
    //         setBook(res.data)
    //         console.log(res.data);
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     })
    // })

    return (
        <BookContext.Consumer>
        <div className={`grid gap-5 ${isBookPage? "lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2":"lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2"}`}>
            {value.map(book => (
                <div key={book.id}>
                <img className='hover:shadow-lg w-[229px] h-[330px] rounded-[5px] object-cover' src={book.image} alt="" />
                <p className='Bosca text-[#00000] text-lg w-[70%]'>{book.title}</p>
                <p className='Bosca text-[#C9C9C9] text-xs'>{book.author}</p>
                </div>
            ))}
            </div>
            </BookContext.Consumer>
        );
}

export default RecentBook
