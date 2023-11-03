import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="home container">
      <motion.h2 animate={{ fontSize: 50 }}>
        Welcome to Adidas Kick
      </motion.h2>
      <Link to="/">
        <button>Add</button>
      </Link>
    </div>
  )
}

export default Home;
