import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loginpage from './components/pages/login_page';
import Welcome from './components/pages/welcome';
import Dashboard from './components/Dashboard/Dashboard';
import Home from './components/pages/home';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Loginpage/>} />
        <Route path="/Welcome" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Dashboard" element={<Dashboard/>} />
     
      </Routes>
    </Router>
  );
};

export default App;
