import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import LoginForm from '../components/form/LoginForm'
import AuthContext from '../contexts/AuthContext';

function Login() {
  const { user } = useContext(AuthContext);

  if (user) {
    return <p>
      You are already logged in.
      <Link to='/'>Go to home</Link>
    </p>;
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
