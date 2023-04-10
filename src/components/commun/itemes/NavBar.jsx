import React, {useState, useContext} from 'react'
import {useLocation} from 'react-router-dom'
import { NavLink, Link } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import SearchInput from './SearchInput';
import AuthContext from '../../../contexts/AuthContext';


function NavBar() { 
  const location = useLocation();
  const isBookPage = location.pathname === "/book";
  const {token, user} = useContext(AuthContext);
  console.log(user);
  
        const [isMenuOpen, setIsMenuOpen] = useState(false);        
            const toggleMenu = () => {
            setIsMenuOpen(!isMenuOpen);
            };
            const NavItem = [
              {
                name: 'Home',
                path: '/'
              },
              {
                name: 'Book',
                path: '/book'
              },
              {
                name: 'Request a Book',
                path: '/request'
              },
              {
                name: 'Contatct',
                path: '/contatct'
              },
            ]

            if (token) {
              NavItem.push({
                name: 'Logout',
                path: '/login',
              });
            } else {
              NavItem.push({
                name: 'Login',
                path: '/login',
              });
            }
            
return (
    <div className='flex flex-col relatiev'>
        <div className='flex items-center justify-between my-[1rem] relative '>
            <Link to='/' className='text-3xl font-normal Bosca '>Mimir</Link>
            {isBookPage && <SearchInput />}
            <button onClick={toggleMenu}>
            {isMenuOpen ? (
            <AiOutlineClose className='text-3xl' />
          ) : (
            <AiOutlineMenu className='text-3xl' />
          )}
            </button>
        </div>
        <div className={`${
          isMenuOpen ? 'block ' : 'hidden'
        }`}>
        <div className='absolute px-5 text-xl font-normal bg-[#FBF8F1] z-40 gap-[2rem] p-[2rem]   justify-center Bosca flex flex-col items-center w-[80%] border-b-2 border-black '>
          {NavItem.map((item) => (
            <div className='mx-auto' key={item.name}>
              <NavLink
                onClick={toggleMenu}
                className='hover:border-[#54BAB9] hover:border-b-2 border-b-2 border-transparent pb-1'
                to={item.path}
              >
                {item.name}
              </NavLink>
            </div>
          ))}
          </div>
          {token && user && (
            <div className="flex flex-col items-center mt-4">
              <img
                src={user.image} // assuming the user has an 'avatar' property with the URL of the avatar image
                alt="Avatar"
                className="object-cover w-8 h-8 rounded-full"
              />
              <span className="mt-1 text-xs">{user.name}</span> {/* assuming the user has a 'name' property */}
            </div>
          )}
        </div>
    </div>
  )
}

export default NavBar
