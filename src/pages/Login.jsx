import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import LoginForm from '../components/form/LoginForm'
import AuthContext from '../contexts/AuthContext';
import {AiOutlineArrowRight} from 'react-icons/ai'


function Login() {
  const { token } = useContext(AuthContext);
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  }
  

  if (token) {
    return (
      <div className='mt-[30vh] flex flex-col items-center font-bold  gap-3'>
        <p className='text-xl Bosca'>You are already logged in.</p>
    <div>
    <button  onClick={handleLogout}
    className='flex items-end Bosca justify-center border-2 w-[18vw] mb-1 text-white bg-black mx-auto border-black py-2 text-sm rounded-lg gap-2 hover:shadow-md'
      >logout
      </button>
      <Link to='/' className='flex items-end gap-2 text-xs font-normal '>
        Go home <AiOutlineArrowRight  />
      </Link>
    </div>
    </div>
    )
  }
  return (
    <div className='flex flex-col items-center justify-center h-screen gap-8 '>
        <div>
        <Link to='/' className='text-3xl font-normal Bosca '>Mimir</Link>
        </div>
        <LoginForm className="" />
    </div>
  )
}

export default Login
