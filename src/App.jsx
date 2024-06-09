import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Favorites from './Pages/Favorites';
import Details from './Pages/Details';

function App() {
  return (
    <div className='min-h-screen  bg-white  text-gray-600 text-lg bg-[url("src/assets/bg9.jpg")] bg-cover'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/recipe-item/:id' element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
