import { Link } from 'react-router-dom';
import image from '../../assets/images/messi.png';

const Messi = () => {
  return (
    <div className='ml-6 img w-51 h-69'>
      <div className="rounded-full bg-fifth-color w-3 h-1 ml-4"/>
      <img src={image} alt="Description" className="w-80 h-3 mt-70 ml-61" />
      <div className="w-3 h-69 ml-7 mt-71 flex flex-col justify-around">
        <h2 className="font-custom2 text-sky-400 text-3xl ml-10 mt-80">X-CrazyFast MESSI</h2>
        <Link to="/x" className="text-white px-2 py-1 ml-6 rounded-2xl bg-gradient-to-r from-blue-700 to-black-500 border-2 border-solid border-cyan-600 text-xl w-5">SHOP NOW</Link>
      </div>
    </div>
  )

}

export default Messi;