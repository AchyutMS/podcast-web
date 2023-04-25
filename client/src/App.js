import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import React, { useState } from 'react'
import { ReactComponent as Menu } from "./resource/menu.svg";
import { ReactComponent as Close } from "./resource/close.svg";

import AddPodcast from "./Admin/AddPodcast";
import ManagePodcast from "./Admin/ManagePodcast";
import Home from "./User/Home";
import Favorite from "./User/Favorite";
import Login from "./Component/Login";
import Signup from "./Component/Signup";
import SideBox from "./Component/SideBox";
import NoPage from "./Component/NoPage";
import Profile from "./User/Profile";


function App() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <BrowserRouter>
      <div style={{display:'flex'}}>
      {!isActive ? <div className='menu-bar'  onClick={handleClick} style={{position: 'fixed', top:'48px', right:'10px'}}>
          <Menu />
        </div> : <div className='menu-bar'  onClick={handleClick} style={{position: 'fixed', top:'48px', right:'10px'}}>
          <Close />
        </div>}
        <SideBox isActive={isActive} setIsActive={setIsActive} />

      <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/favorite' element={<Favorite />} />
          <Route path='/profile' element={<Profile />} />
          {/* <Route path='/OpPharmacyBilling' element={<OpPharmacyBilling />} /> */}

          {/* <Route path="payment" element={<Payment />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          
          <Route path="/add_podcast" element={<AddPodcast />} />
          <Route path="/manage_podcast" element={<ManagePodcast />} />

          <Route path="*" element={<NoPage />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
