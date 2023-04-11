import React, {useState, useEffect} from 'react'

function BookDetailles({ bookId }) {

    const [bookDetails, setBookDetails] = useState([]);
    
    useEffect(() => {
        fetchBookDetails();
    }, [bookId]);

    const fetchBookDetails = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/mimir/book/${bookId}`);
            const data = await response.json();
            setBookDetails(data);
            console.log(data);
        } catch (error) {
            console.error('Error fetching book details:', error);
        }
    };
    
    if (!bookDetails) {
        return <div>Loading
                <span className='dots1'>.</span>
                <span className='dots2'>.</span>
                <span className='dots3'>.</span>
            </div>;
      }


    return (
    <div>
        <section className='flex md:flex-row gap-4 bg-[#F9F2E7] sm:flex-col'>

                <img className='w-[28rem] object-cover h-[30rem] ' src={bookDetails.image} alt="" />

            <div className='flex flex-col justify-center gap-4 pl-2 capitalize'>
                <p className='text-4xl Bosca'>{bookDetails.title}</p>
                <div className='flex gap-1 text-base text-[#DEA331] '>
                    <p>{bookDetails.author}</p>
                    <p>.</p><p>{bookDetails.year}</p><p>.</p>
                    <p>{bookDetails.type ? bookDetails.type.join(" / ") : "Not available"}</p>
                </div>
                <p className='w-[80%] text-gray-400 text-xs'>
                    {bookDetails.description}
                </p>
            </div>
        </section>
    </div>
  )
}

export default BookDetailles
