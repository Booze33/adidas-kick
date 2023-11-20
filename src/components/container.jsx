//import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Nav from './nav.jsx';
import Page from './page.jsx';
import '../assets/styles/container.css';

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 2,
      delay: 1.5,
    }
  },
  exit: {
    y: "-100vw",
    transition: {
      ease: 'easeInOut',
    }
  }
}

const Container = () => {
  return (
    <motion.nav className='test'
    variants={containerVariants}
    initial='hidden'
    animate='visible'
    exit='exit'>
      <Nav />
      <Page />
    </motion.nav>
  );
}

export default Container;