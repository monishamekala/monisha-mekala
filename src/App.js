import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/home';
import TheNavbar from './Components/Navbar';


function App() {
  return (
    <Router>
      <TheNavbar />
      <Routes>
        <Route path='/' element = {<Home />}/>
      </Routes>
    </Router>
  );
}

export default App;
