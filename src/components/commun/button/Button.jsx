import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'


function Button({props}) {
  return (
    <div>
        <button className='flex items-center justify-center border-2 w-[25%] mx-auto border-black py-2 text-sm rounded-lg gap-2 hover:shadow-md'>
        {props.children} <AiOutlineArrowRight  />
        </button>
    </div>
  )
}

export default Button
