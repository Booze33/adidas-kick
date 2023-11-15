import { CgAdidas } from 'react-icons/cg';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineShoppingBag } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";

const Nav = () => {
  return (
    <header className="nav-con">
      <CgAdidas />
      <nav>
        <a>X-Collection</a>
        <a>Predator</a>
        <a>Copa</a>
      </nav>
      <div>
        <IoPersonOutline />
        <MdOutlineShoppingBag />
      </div>
    </header>
  )
}

export default Nav;