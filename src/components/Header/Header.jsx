import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {

  const [open, setOpen] = useState(false)

  return (
    <div className="bg-white py-4 shadow-sm px-4 md:px-0">
      <div className="container mx-auto">
        <nav className="nav-wrapper flex justify-between items-center">
          <div className="text-xl md:text-3xl font-semibold text-cyan-400">
            <Link to='/'>WebDev Quiz</Link>
          </div>
          <ul className={`menu block md:flex mt-2 top-12 md:top-0 py-5 md:py-0 duration-500 ease-in-out ${open ? 'left-0' : 'left-[-100%]'}`}>
            <li><Link className="text-black text-lg pl-6 hover:text-gray-500 duration-500" to="/">Home</Link></li>
            <li><Link className="text-black text-lg pl-6 hover:text-gray-500" to="/statistics">Statistics</Link></li>
            <li><Link className="text-black text-lg pl-6 hover:text-gray-500" to="/blog">Blog</Link></li>
          </ul>
          <div onClick={() => setOpen(!open)} className="md:hidden h-6 w-6 cursor-pointer">
            {
              open ? <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon> : <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
            }
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
