import React, {useState} from 'react'
import {useLocation} from 'react-router-dom'
import { NavLink, Link } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import SearchInput from './SearchInput';


function NavBar() { 
  const location = useLocation();
  const isBookPage = location.pathname === "/book";
  
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
              {
                name: 'Login',
                path: '/login'
              },
            ]
        
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
          {NavItem.map((item) =>(
              <div className='mx-auto'
                key={item.name}>
                <NavLink onClick={toggleMenu}
                className='hover:border-[#54BAB9] hover:border-b-2 border-b-2 border-transparent pb-1'
                  to={item.path}>
                  {item.name}
                </NavLink>
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}

// function MainNav() {
//     return(
//         <div className='flex flex-col gap-[1rem] items-center justify-center px-5 pt-5 pb-12 font-normal Bosca text-xl absolute w-[83vw]  bg-[#FBF8F1]  z-50 '>
//             <NavLink to="/" className='hover:border-[#54BAB9] hover:border-b-2 border-b-2 border-transparent pb-1' >Home</NavLink>            
//             <NavLink to="/book" className='hover:border-[#54BAB9] hover:border-b-2 border-b-2 border-transparent pb-1' >Book</NavLink>
//             <NavLink to="/request" className='hover:border-[#54BAB9] hover:border-b-2 border-b-2 border-transparent pb-1' >Request a Book</NavLink>
//             <NavLink to="/" className='hover:border-[#54BAB9] hover:border-b-2 border-b-2 border-transparent pb-1' >Contatct</NavLink>
//             <NavLink to="/login" className='hover:border-[#54BAB9] hover:border-b-2 border-b-2 border-transparent pb-1' >Login</NavLink>
//         </div>
//     )
// }

export default NavBar
