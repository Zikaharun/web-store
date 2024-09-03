"use client"
// components/Navbar.js
import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IoSearch } from "react-icons/io5";
import { AiOutlineShopping } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { RiAccountBoxLine } from "react-icons/ri";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='sticky top-0 left-0 w-full bg-white text-white shadow-lg z-50 p-4'>
      <div className='flex items-center justify-between space-x-2 h-16 max-w-screen'>
        <div className='flex items-center '>
          <Link href="/">
            <h1 className='text-black text-md md:text-2xl sm:text-md font-bold'>Logo</h1>
          </Link>
        </div>
        <div className="relative ">
      <input
        type="text"
        className="pl-10 pr-4 py-2 w-32 md:w-64 sm:w-48 text-xs md:text-md text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
        placeholder="Search..."
      />
      <button className='absolute left-3 top-2 text-gray-500'>
      <IoSearch size={20}/>
      </button>
    </div>
        <div className='md:hidden pt-2'>
          <button onClick={toggleMenu} className='text-black focus:outline-none'>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <div className='flex space-x-2'>
        <div className='md:flex space-x-2 hidden md:block'>
          <Link href="/" className='hover:animate-bounce hover:transition-delay-300 hover:ease-in-out hover:bg-gray-100 text-black hover:text-gray-800 font-semibold text-sm py-1 px-2 rounded shadow text-sm'>
            <p>about</p>
          </Link>
          <Link href="/" className="hover:animate-bounce hover:transition-delay-300 hover:ease-in-out hover:bg-gray-100 text-black hover:text-gray-800 font-semibold py-1 px-2 rounded shadow text-sm ">
            <p>service</p>
          </Link>
          <Link href="/" className="hover:animate-bounce hover:transition-delay-300 hover:ease-in-out hover:bg-gray-100 text-black hover:text-gray-800  font-semibold py-1 px-1 rounded shadow text-sm">
            <p>contact</p>
          </Link>
          <div className='relative pt-1'>
        <button className="relative hover:animate-bounce hover:transition-delay-300 hover:ease-in-out hover:bg-gray-100 text-black hover:text-gray-800 py-1 px-1 rounded shadow text-sm">
              <RiAccountBoxLine className='font-semibold' size={20} />
            </button>
        </div>
        </div>
        <div className='relative pt-1'>
            <button className="relative hover:animate-bounce hover:transition-delay-300 hover:ease-in-out hover:bg-gray-100 text-black hover:text-gray-800 py-1 px-1 rounded shadow text-sm">
            <FaRegHeart className='font-semibold' size={20}/>
              <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 text-xs bg-red-500 text-white rounded-full h-4 w-4 flex items-center justify-center">0</span>
            </button>
        </div>
        <div className='relative pt-1'>
            <button className="relative hover:animate-bounce hover:transition-delay-300 hover:ease-in-out hover:bg-gray-100 text-black hover:text-gray-800 py-1 px-1 rounded shadow text-sm">
              <AiOutlineShopping className='font-semibold' size={20} />
              <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 text-xs bg-red-500 text-white rounded-full h-4 w-4 flex items-center justify-center">0</span>
            </button>
        </div>
        </div>
        
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className='flex flex-col space-y-4 mt-4'>
          <Link href="/" className='animate-bounce hover:bg-gray-100 text-slate-300 hover:text-gray-800 font-semibold py-2 px-4 rounded shadow transition duration-300 ease-in-out'>
            <p>about</p>
          </Link>
          <Link href="/project" className="animate-bounce hover:bg-gray-100 text-slate-300 hover:text-gray-800 font-semibold py-2 px-4 rounded shadow  transition duration-300 ease-in-out">
            <p>project</p>
          </Link>
          <Link href="/about" className="animate-bounce hover:bg-gray-100 text-slate-300 hover:text-gray-800 font-semibold py-2 px-4 rounded shadow  transition duration-300 ease-in-out">
            <p>contact</p>
          </Link>
        <button className="relative animate-bounce hover:bg-gray-100 text-slate-300 hover:text-gray-800 font-semibold py-2 px-4 rounded shadow  transition duration-300 ease-in-out">
              <RiAccountBoxLine className='font-semibold' size={20} />
              <span className='bottom-3 items-center'>Log-in</span>
            </button>
        
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
