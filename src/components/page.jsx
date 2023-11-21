import image from '../assets/images/adidas-1.jpg';
import image2 from '../assets/images/adidas 2023 heatspawn pack boots (2).jpg';
import image3 from '../assets/images/adidas_crazyfrush23_440x510.jpg';
import '../assets/styles/page.css';

const Page = () => {
  return (
    <div className="welcome mt-16">
      <div className="w-screen">
        <div className="w-32">
          <img src={image3} alt="Description" className="welcome-img" />
          <img src={image} alt="Description" className="welcome-img" />
          <img src={image2} alt="Description" className="welcome-img" />
        </div>
      </div>
      <svg id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
            <stop id="stop1" stopColor="rgba(0, 103.098, 255, 1)" offset="0%"></stop>
            <stop id="stop2" stopColor="rgba(15.147, 22.795, 30.096, 1)" offset="100%"></stop>
          </linearGradient>
        </defs>
        <path fill="url(#sw-gradient)" d="M19.3,-6.9C22.6,3.8,21.1,15.4,14.2,20.7C7.3,26,-5,25,-16,18C-26.9,11,-36.4,-2,-33.5,-12.1C-30.6,-22.3,-15.3,-29.6,-3.6,-28.4C8,-27.3,16.1,-17.5,19.3,-6.9Z" width="100%" height="100%" transform="translate(50 50)" strokeWidth="0" style={{ transition: 'all 0.3s ease 0s' }}></path>
      </svg>
    </div>
  );
}

export default Page;
