import { useState } from 'react';
import { CgAdidas } from 'react-icons/cg';
import { MdOutlineShoppingBag } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import DropNav from './dropNav';
import '../assets/styles/nav.css';

const Nav = () => {
  const [openNav, setOpenNav] = useState(false);

  const onEnter = () => {
    setOpenNav(true);
  }

  const onLeave = () => {
    setOpenNav(false);
  }

  return (
    <header className="flex fixed flex-row items-center justify-between inset-y-0 px-4 py-2 w-screen z-10 h-16 bg-custom-color">
      <CgAdidas className="text-5xl text-white" />
      <nav className="flex space-x-4">
        <a href="#Home" className="nav-link text-white text-xl px-4 font-custom">Home</a>
        <a href="#About" className="nav-link text-white text-xl px-4 font-custom">About</a>
      </nav>

      <div className="ml-65 w-4 h-5 mt-10" onMouseEnter={onEnter} onMouseLeave={onLeave}>
          <a className="nav-link text-white text-xl px-4 font-custom">
            Type
          </a>
          {openNav && <DropNav />}
        </div>

      <div className="flex space-x-4">
        <IoPersonOutline className="text-white" />
        <MdOutlineShoppingBag className="text-white" />
      </div>
    </header>
  );
}

export default Nav;
