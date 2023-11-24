import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../assets/styles/home.css';
import { FaArrowAltCircleDown } from 'react-icons/fa';

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 3,
      delay: 1,
      ease: "easeInOut"
    }
  }
}

const pathVariantsTwo = {
  hidden: {
    opacity: 0,
    pathLength: 0 
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 3,
      delay: 2,
      ease: "easeInOut"
    }
  }
}

const pathVariantsThree = {
  hidden: {
    opacity: 0,
    pathLength: 0 
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 3,
      delay: 3,
      ease: "easeInOut"
    }
  }
}

const logoVariants = {
  hidden: {
    opacity: 0,
    x: -13
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: "easeInOut",
      x: 0
    }
  }
}

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 2,
      delay: 1,
    }
  },
  exit: {
    y: "-100vw",
    transition: {
      ease: 'easeInOut',
      duration: 1.5,
    }
  }
}

const Home = () => {
  return (
    <motion.div
      className="home-container"
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='exit'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" className="adidas-svg">
        <motion.path
          variants={pathVariantsThree}
          initial="hidden"
          animate="visible"
          className="adidas-path"
          style={{ fill: '#fff', stroke: '#8ebbff' }}
          d="M 194.215 148.389 L 196.746 263.953 L 232.217 282.092 L 227.129 147.092 L 194.215 148.389 Z"
          transform="scale(1.1) matrix(0.866025, -0.500001, 0.500001, 0.866025, -78.730644, 135.358178)">
        </motion.path>
        <motion.path
          variants={pathVariantsTwo}
          initial="hidden"
          animate="visible"
          className="adidas-path"
          style={{ fill: '#8ebbff', stroke: '#fff' }}
          d="M 181.931 187.749 L 182.974 282.896 L 145.557 260.717 L 146.142 189.072 L 181.931 187.749 Z"
          transform="scale(1.1) matrix(0.857167, -0.515038, 0.515038, 0.857167, -94.777281, 117.741069)">
        </motion.path>
        <motion.path
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          className="adidas-path"
          style={{ fill: '#fff', stroke: '#8ebbff' }}
          d="M 101.752 233.329 L 138.848 233.329 L 139.752 281.737 L 101.757 258.991 L 101.752 233.329 Z"
          transform="scale(1.1) matrix(0.857167, -0.515038, 0.515038, 0.857167, -115.391921, 98.976058)">
        </motion.path>
      </svg>
      <motion.h1
        variants={logoVariants}
        initial="hidden"
        animate="visible"
        className="adidas-logo">
          adidas
      </motion.h1>
      <Link
        to="/container"
        className="scroll-link">
          <motion.h2
            initial={{ y: 250 }}
            animate={{ y: 0 }}
            transition={{ delay: 5, ease: "easeInOut", duration: 3 }}
            className="scroll-btn">
            View Page <FaArrowAltCircleDown className="scroll"/>
          </motion.h2>
      </Link>
    </motion.div>
  );
};

export default Home;
