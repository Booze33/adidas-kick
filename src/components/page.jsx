import image from '../assets/images/adidas-1.jpg';
import image2 from '../assets/images/adidas 2023 heatspawn pack boots (2).jpg';
import image3 from '../assets/images/adidas_crazyfrush23_440x510.jpg';
import '../assets/styles/page.css';

const Page = () => {
  return (
    <div className="welcome mt-16">
      <div className="w-11">
        <div>
          <img src={image3} alt="Description" className="welcome-img" />
          <img src={image} alt="Description" className="welcome-img" />
          <img src={image2} alt="Description" className="welcome-img" />
        </div>
      </div>
    </div>
  )
}

export default Page;