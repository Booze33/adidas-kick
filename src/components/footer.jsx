import { FiTwitter } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="w-screen flex justify-around h-5 border-t-2 border-solid divide-slate-700 pt-8">
      <div>
        <h1 className="font-custom2 text-slate-400 text-3xl">Adidas-Kick</h1>
        <h4 className="font-custom text-slate-400 text-4">Phone Number  : +3824243535661</h4>
      </div>
      <div><h1 className="font-custom text-slate-400 text-4">Developed by <a className="text-sky-400" href="https://github.com/Booze33">Pam Tisloh</a> | All rights reserved © 2023</h1></div>
      <div className="flex">
        <FiTwitter className="ml-3 text-slate-400 text-2xl" />
        <FaLinkedinIn className="ml-3 text-slate-400 text-2xl"/>
        <FaGithub className="ml-3 text-slate-400 text-2xl"/>
      </div>
    </div>
  )
}

export default Footer;