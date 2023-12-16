import { Link } from 'react-router-dom';

const DropNav = () => {
  return (
    <div className="w-4 h-5 bg-fifth-color p-4 mt-2 rounded-xl flex flex-col justify-center">
      <Link className="pl-8">Adidas-X</Link>
      <Link className="border-t-2 border-gray-950 border-solid pl-8">Predator</Link>
      <Link className="border-t-2 border-gray-950 border-solid pl-8">Copa</Link>
    </div>
  )
}

export default DropNav;