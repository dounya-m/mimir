import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function RequestForm() {
  const [bookName, setBookName] = useState('')
  const [author, setAuthor] = useState('')
  const [language, setLanguage] = useState('')
  const [successMessage, setSuccessMessage] = useState(null)

  const sendRequest = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/mimir/request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          bookName,
          author,
          language,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to send request')
      }

      setSuccessMessage('Request submitted successfully!')
      setBookName('')
      setAuthor('')
      setLanguage('')
    } catch (error) {
      console.error(error)
      // Display an error message to the user here
    }
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        sendRequest()
      }}
      className='flex flex-col items-center justify-center w-full gap-5'
    >
      <input
        className='w-full px-2 py-2 text-sm bg-transparent border-2 border-black rounded-[5px]'
        placeholder='Book name'
        type='text'
        value={bookName}
        onChange={(e) => setBookName(e.target.value)}
        required
      />
      <input
        className='w-full px-2 py-2 text-sm bg-transparent border-2 border-black rounded-[5px]'
        placeholder='Author'
        type='text'
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <input
        className='w-full px-2 py-2 text-sm bg-transparent border-2 border-black rounded-[5px]'
        placeholder='Language'
        type='text'
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        required
      />
      <button type='submit' className='w-full px-2 py-2 text-white bg-black rounded-[5px]'>
        send
      </button>
      {successMessage && 
      <p className='text-black Bosca-500'>{successMessage} <Link className='font-semibold' to='/'>Back Home</Link></p>
      }
    </form>
  )
}

export default RequestForm
