import React from 'react';
import { Routes, Route } from 'react-router-dom';


import LandingPage from "./components/LandingPage"
import DeliveryPage from "./components/DeliveryPage"
import PickupPage from "./components/PickupPage"
import Menu from "./components/Menu"


function App() {
  return (
    <Routes >
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/DeliveryPage" element={<DeliveryPage/>}/>
          <Route path="/PickupPage" element={<PickupPage/>}/>
          <Route path="/menu" element={<Menu />} />
      </Routes>
);
}

export default App