import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import './App.css';
import React, { useState, useEffect } from 'react'
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
  console.log('APP IS CALLEDDDDDDD')
  const [isActive, setIsActive] = useState();
  const [isAdmin, setAdmin] = useState();
  const [isValidToken, setIsValidToken] = useState(false);
  const [user, setUser] = useState({});
  const handleClick = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    async function verifyUser() {
      const token = localStorage.getItem("access_token");
      if(token) {
        await axios.post('http://localhost:8800/api/auth/verify', null, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(response => {
          console.log('olaa',response.data)
          setIsValidToken(response.data.valid);
          console.log(response.data.user)
          setUser(response.data.user)
          if (response?.data.user.role === 'admin') {
            setAdmin(true)
          } else {
            console.log('hahah')
            setAdmin(false)
          }
        })
        .catch(error => {
          console.log('catchhhhh')
          setIsValidToken(false);
        });
      } else {
        setIsValidToken(false)
      }
    }

    verifyUser();
    console.log(isValidToken)
    console.log('isadmin',isAdmin)
  },[])
  

  return (
    <BrowserRouter>
      <div style={{display:'flex'}}>
      {!isActive ? <div className='menu-bar'  onClick={handleClick} style={{position: 'fixed', top:'48px', right:'10px'}}>
          <Menu />
        </div> : <div className='menu-bar'  onClick={handleClick} style={{position: 'fixed', top:'48px', right:'10px'}}>
          <Close />
        </div>}
        <SideBox isActive={isActive} setIsActive={setIsActive} isValidToken={isValidToken} isAdmin={isAdmin} />

      <Routes>

          <Route path="/" element={<Home user={user}/>} />

          <Route path='/favorite' element={isValidToken ? <Favorite /> : <Login />} />

          <Route path='/profile' element={isValidToken ? <Profile user={user}/> : <Login />} />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          
          <Route path="/add_podcast" element={isAdmin && <AddPodcast />} />
          <Route path="/manage_podcast" element={isAdmin && <ManagePodcast />} />

          <Route path="*" element={<NoPage />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
