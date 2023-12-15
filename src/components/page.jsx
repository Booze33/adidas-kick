import { Link } from 'react-router-dom';
import { useState } from 'react';
import { TbWorld } from "react-icons/tb";
import { TbClockCheck } from "react-icons/tb";
import { TbTruckDelivery } from "react-icons/tb";
// import { AnimatePresence } from 'framer-motion';
import Messi from './players/messi';
import Pogba from './players/pogba';
import Benzima from './players/benzima';
import Dybala from './players/dybala';
import Salah from './players/salah';
import Footer from './footer';
import image3 from '../assets/images/triple.png';
import '../assets/styles/page.css';

const Page = () => {
  const [currentDiv, setCurrentDiv] = useState(1);
  const [isWorldHovered, setIsWorldHovered] = useState(false);
  const [isClockHovered, setIsClockHovered] = useState(false);
  const [isTruckHovered, setIsTruckHovered] = useState(false);

  const handleWorldMouseEnter = () => {
    setIsWorldHovered(true);
  };

  const handleWorldMouseLeave = () => {
    setIsWorldHovered(false);
  };

  const handleClockMouseEnter = () => {
    setIsClockHovered(true);
  };

  const handleClockMouseLeave = () => {
    setIsClockHovered(false);
  };

  const handleTruckMouseEnter = () => {
    setIsTruckHovered(true);
  };

  const handleTruckMouseLeave = () => {
    setIsTruckHovered(false);
  };

  const handleNavigation = (newDiv) => {
    setCurrentDiv(newDiv);
  };


  return (
    <div className="welcome mt-16">
      <div className="container-bg">
        <svg className="linear-bg" id="sw-js-blob-svg" viewBox="35 20 50 60" width="850" height="550" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
              <stop id="stop1" stopColor="rgba(0, 103.098, 255, 1)" offset="0%"></stop>
              <stop id="stop2" stopColor="rgba(15.147, 22.795, 30.096, 1)" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path fill="url(#sw-gradient)" d="M19.3,-6.9C22.6,3.8,21.1,15.4,14.2,20.7C7.3,26,-5,25,-16,18C-26.9,11,-36.4,-2,-33.5,-12.1C-30.6,-22.3,-15.3,-29.6,-3.6,-28.4C8,-27.3,16.1,-17.5,19.3,-6.9Z" width="100%" height="100%" transform="translate(50 50)" strokeWidth="0" style={{ transition: 'all 0.3s ease 0s' }}></path>
        </svg>

        <svg className="linear-bg2" id="sw-js-blob-svg" viewBox="35 25 50 60" width="450" height="250" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
              <stop id="stop1" stopColor="rgba(4.751, 7.558, 18.712, 1)" offset="0%"></stop>
              <stop id="stop2" stopColor="rgba(39.591, 118.804, 205.409, 1)" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path fill="url(#sw-gradient)" d="M21.7,4.8C21.7,15.8,10.8,31.6,-2.4,31.6C-15.7,31.6,-31.3,15.8,-31.3,4.8C-31.3,-6.2,-15.7,-12.4,-2.4,-12.4C10.8,-12.4,21.7,-6.2,21.7,4.8Z" width="100%" height="100%" transform="translate(50 50)" strokeWidth="0" style={{ transition: 'all 0.3s ease 0s' }}></path>
        </svg>

        <svg className="linear-bg3" id="sw-js-blob-svg" viewBox="15 25 50 60" width="350" height="200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
              <stop id="stop1" stopColor="rgba(4.751, 7.558, 18.712, 1)" offset="0%"></stop>
              <stop id="stop2" stopColor="rgba(39.591, 118.804, 205.409, 1)" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path fill="url(#sw-gradient)" d="M21.1,13.5C15.3,22.3,-9.8,21.2,-16.6,12C-23.3,2.7,-11.6,-14.7,0.9,-14.2C13.5,-13.7,26.9,4.8,21.1,13.5Z" width="100%" height="100%" transform="translate(50 50)" strokeWidth="0" style={{transition: 'all 0.3s ease 0s'}}></path>
        </svg>
      </div>

      <div className="intro-collection w-screen">
        <div className="w-1/2 left-1/2 absolute">
          <img src={image3} alt="Description" className="welcome-img" />
        </div>
        <div className="head-cont">
          <h1 className="font-custom2 text-sky-400 text-6xl">Adidas</h1>
          <h2 className="font-custom text-sky-400 text-4xl">Collection</h2>
          <p className="text-white py-6 text-xl">Elevate Your Game with Our Exclusive Adidas Football Boots Collection, Inspired by Soccer Legends Messi, Salah, Pogba, and Dybala. Join the Winning Team Now and Dominate the Pitch in Style!</p>
          <Link to="/x" className="text-white px-2 py-1 mt-16 rounded-2xl bg-gradient-to-r from-blue-700 to-black-500 border-2 border-solid border-cyan-600 text-xl">SHOP NOW</Link>
        </div>
      </div>

      <div className="h-8 w-50 bg-fifth-color mb-3 ml-3" />

      <section className="w-screen h-69 flex my-4">
        <div className="flex flex-col h-69 w-4 pt-10 ml-5">
          <button className={`text-white text-xl mb-5 player-nav ${currentDiv === 1 ? 'active' : ''}`} onClick={() => handleNavigation(1)}>MESSI</button>
          <button className={`text-white text-xl mb-5 player-nav ${currentDiv === 2 ? 'active' : ''}`} onClick={() => handleNavigation(2)}>POGBA</button>
          <button className={`text-white text-xl mb-5 player-nav ${currentDiv === 3 ? 'active' : ''}`} onClick={() => handleNavigation(3)}>BENZIMA</button>
          <button className={`text-white text-xl mb-5 player-nav ${currentDiv === 4 ? 'active' : ''}`} onClick={() => handleNavigation(4)}>DYBALA</button>
          <button className={`text-white text-xl mb-5 player-nav ${currentDiv === 5 ? 'active' : ''}`} onClick={() => handleNavigation(5)}>SALAH</button>
        </div>

        <div style={{ display: currentDiv === 1 ? 'block' : 'none' }}>
          <Messi />
        </div>
        <div style={{ display: currentDiv === 2 ? 'block' : 'none' }}>
          <Pogba />
        </div>
        <div style={{ display: currentDiv === 3 ? 'block' : 'none' }}>
          <Benzima />
        </div>
        <div style={{ display: currentDiv === 4 ? 'block' : 'none' }}>
          <Dybala />
        </div>
        <div style={{ display: currentDiv === 5 ? 'block' : 'none' }}>
          <Salah />
        </div>
      </section>

      <section className="flex justify-around w-screen h-6 bg-custom-color border-t-2 border-solid divide-slate-700 pt-6">
        <div
          onMouseEnter={handleWorldMouseEnter}
          onMouseLeave={handleWorldMouseLeave}
        >
          {isWorldHovered ? (
            <span className="text-slate-400 text-xl transition duration-700 ease-in-out">Worldwide shipping</span>
          ) : (
            <TbWorld className="text-slate-400 text-4xl transition duration-700 ease-in-out" />
          )}
        </div>

        <div
          onMouseEnter={handleClockMouseEnter}
          onMouseLeave={handleClockMouseLeave}
        >
          {isClockHovered ? (
            <span className="text-slate-400 text-xl transition duration-700 ease-in-out">Arrives In One Week</span>
          ) : (
            <TbClockCheck className="text-slate-400 text-4xl transition duration-700 ease-in-out" />
          )}
        </div>

        <div
          onMouseEnter={handleTruckMouseEnter}
          onMouseLeave={handleTruckMouseLeave}
        >
          {isTruckHovered ? (
            <span className="text-slate-400 text-xl transition duration-700 ease-in-out">Ready To Dispatch</span>
          ) : (
            <TbTruckDelivery className="text-slate-400 text-4xl transition duration-700 ease-in-out" />
          )}
        </div>
      </section>


      <section className="w-screen h-68 flex justify-around py-16">
        <div className="bg-custom-color w-6 h-7 mt-4 rounded-2xl p-6">
          <h1 className="font-custom2 text-slate-400 text-3xl ml-4 mb-3">Our Values</h1>
          <div className="h-8 w-7 bg-third-color mb-3" />
          <p className="text-white text-center text-l">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, aut perferendis. Est unde inventore, blanditiis explicabo necessitatibus laborum ipsa cupiditate eum nulla quia repellendus! Cumque, a. Autem cum deleniti provident.</p>
        </div>
        <div className="bg-custom-color w-6 h-3 rounded-2xl p-6">
          <h1 className="font-custom2 text-slate-400 text-3xl ml-4 mb-3">About Us</h1>
          <div className="h-8 w-7 bg-third-color mb-3" />
          <p className="text-white text-center text-l">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, aut perferendis. Est unde inventore, blanditiis explicabo necessitatibus laborum ipsa cupiditate eum nulla quia repellendus! Cumque, a. Autem cum deleniti provident.Magnam amet perspiciatis, commodi est perferendis officia quas deleniti numquam ratione  sequi totam perferendis  numquam ratione sequi totam tenetur optio.</p>
        </div>
        <div className="bg-custom-color w-6 h-7 mt-4 rounded-2xl p-6">
          <h1 className="font-custom2 text-slate-400 text-3xl ml-4 mb-3">Our Goals</h1>
          <div className="h-8 w-7 bg-third-color mb-3" />
          <p className="text-white text-center text-l">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, aut perferendis. Est unde inventore, blanditiis explicabo necessitatibus laborum ipsa cupiditate eum nulla quia repellendus! Cumque, a. Autem cum deleniti provident.</p>
        </div>
      </section>

      <section>
        <Footer />
      </section>
    </div>
  );
}

export default Page;
