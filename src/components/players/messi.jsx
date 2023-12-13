import image from '../../assets/images/messi.png';

const Messi = () => {
  return (
    <div className='ml-12 img'>
      <div className="rounded-full bg-fifth-color w-1 h-1"/>
      <img src={image} alt="Description" className="w-80 h-3 mt-70 ml-61" />
      <h2 className="font-custom2 text-sky-400 text-3xl ml-10">X-CrazyFast MESSI</h2>
    </div>
  )

}

export default Messi;