import { CgAdidas } from 'react-icons/cg';
import { MdOutlineShoppingBag } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";

const Nav = () => {
  return (
    <header className="flex absolute flex-row items-center justify-between px-4 py-2 w-screen h-16 bg-custom-color">
      <CgAdidas className="text-5xl text-white" />
      <nav className="flex space-x-4">
        <a className="text-white text-xl px-4">Adidas-X</a>
        <a className="text-white text-xl px-4">Predator</a>
        <a className="text-white text-xl px-4">Copa</a>
      </nav>
      <div className="flex space-x-4">
        <IoPersonOutline className="text-white" />
        <MdOutlineShoppingBag className="text-white" />
      </div>
    </header>
  );
}

export default Nav;
