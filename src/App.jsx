import React from 'react';
//import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './components/home.jsx';
function App() {
  return (
    <>
      <Home />
      {/* <BrowserRouter>
        <Home />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
