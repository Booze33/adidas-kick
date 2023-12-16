import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/home';
import Container from './components/container';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();

  return (
    <div>
      <AnimatePresence>
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Home />} />
          <Route path="/adidas" element={<Container />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
