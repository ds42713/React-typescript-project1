import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ResponsiveNavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="bg-black">
      <div className="flex items-center justify-between flex-wrap bg-black p-6">
        {/* App header */}
        <div className=" text-white mr-6">
          <Link to="/product" className='flex items-center flex-shrink-0' >
            <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg>
            <span className="font-semibold text-xl tracking-tight">Type Script Project</span>
          </Link>
        </div>

        {/* Links shown in a row on larger screens */}
        <nav className="hidden  flex-grow md:flex md:items-center md:w-auto  space-x-6 " > 
        {/* className="hidden md:block space-x-6" */}
          <div className="text-sm flex md:flex-grow ">
            <Link to="/product" >
              <div className="block  lg:inline-block  text-teal-200 hover:text-white mr-4">
                Product
              </div>
            </Link>
            <Link to="/product" >
              <div className="block  lg:inline-block  text-teal-200 hover:text-white mr-4">
                Movie
              </div>
            </Link>
            <Link to="/product" >
              <div className="block  lg:inline-block  text-teal-200 hover:text-white mr-4">
                Blog
              </div>
            </Link>
          </div>
        </nav>

        {/* Button to toggle mobile menu shown on smaller screens */}
        <button
          className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white md:hidden"
          onClick={() => setMenuOpen(!menuOpen)} >
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
        </button>
      </div>
      
      {/* Mobile */}
      {menuOpen &&
        <nav className="p-4 flex flex-col space-y-3 md:hidden">
          <Link to="/product" >
            <div className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Product
            </div>
          </Link>
          <Link to="/product" >
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Examples
            </a>
          </Link>
          <Link to="/product" >
            <div className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Blog
            </div>
          </Link>
        </nav>
      }

    </div>
  );
};


export default ResponsiveNavBar