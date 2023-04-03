import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineArrowRight} from 'react-icons/ai'


function ErrorNotFound() {
  return (
    <div className='flex flex-col gap-6 h-[43vh] capitalize'>
      <h1 className='text-3xl font-semibold text-center Bosca'>Page non disponible</h1>
      <Link to='/' className='flex items-center justify-center border-2 w-[25%] mx-auto border-black py-2 text-sm rounded-lg gap-2 hover:shadow-md'>
          Back Home <AiOutlineArrowRight  />
      </Link>
    </div>
  )
}

export default ErrorNotFound
