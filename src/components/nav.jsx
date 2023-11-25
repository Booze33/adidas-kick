import { CgAdidas } from 'react-icons/cg';
import { MdOutlineShoppingBag } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import '../assets/styles/nav.css';

const Nav = () => {
  return (
    <header className="flex fixed flex-row items-center justify-between inset-y-0 px-4 py-2 w-screen z-10 h-16 bg-custom-color">
      <CgAdidas className="text-5xl text-white" />
      <nav className="flex space-x-4">
        <a className="nav-link text-white text-xl px-4 font-custom">Home</a>
        <a className="nav-link text-white text-xl px-4 font-custom">About</a>
        <a className="nav-link text-white text-xl px-4 font-custom">Contact</a>
      </nav>
      <div className="flex space-x-4">
        <IoPersonOutline className="text-white" />
        <MdOutlineShoppingBag className="text-white" />
      </div>
    </header>
  );
}

export default Nav;
