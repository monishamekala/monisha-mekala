import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/home';
import TheNavbar from './Components/Navbar';
import Skills from './Pages/skills';
import Exp from './Pages/experience';
import Projects from './Pages/projects';
import Certi from './Pages/certifications';
import Resume from './Pages/resume';

function App() {
  return (
    <Router>
      <TheNavbar />
      <Routes>
        <Route path='/' element = {<Home />}/>
        <Route path='/myResume' element = {<Resume />}></Route>
        <Route path='/skills' element = {<Skills />}></Route>
        <Route path='/experience' element = {<Exp />}></Route>
        <Route path = '/projects' element = {<Projects />}></Route>
        <Route path = '/certifications' element = {<Certi />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
