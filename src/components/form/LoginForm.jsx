import React, {useState, useContext} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import AuthContext from '../../contexts/AuthContext'

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await login(email, password);
    if (result.success) {
      //log the user information
      navigate('/');
    } else {
      setError(result.message);
    }
  };


  return (
    <>
        <form
          onSubmit={handleSubmit}
          className='flex flex-col items-center justify-center gap-5 sm:w-[60vw] lg:w-[20vw] '>
            
                <input  className='w-full px-2 py-2 text-sm bg-transparent border-2 border-black rounded-[5px]' placeholder='Email'
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />
                <input  className='w-full px-2 py-2 text-sm bg-transparent border-2 border-black rounded-[5px]' placeholder='Password'
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                />
            <button className='w-full px-2 py-2 text-white bg-black rounded-[5px]'>login</button>
        </form>
        <Link to='/' className='flex items-center gap-2 my-3 text-sm font-medium capitalize'>
            <AiOutlineArrowLeft />
                <p>return to home</p>
            </Link>

    </>
  )
}

export default LoginForm
