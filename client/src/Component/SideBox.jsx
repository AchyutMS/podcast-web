import React, { useState, useEffect } from "react";
import { ReactComponent as Home } from "../resource/home.svg";
import { ReactComponent as Profile } from "../resource/profile.svg";
import { ReactComponent as Favorite } from "../resource/favorite.svg";
import { ReactComponent as Prev } from "../resource/prev.svg";
import "./style.css";
import { useNavigate } from "react-router-dom";
// import jwtDecode from "jwt-decode";

export default function App_pageDes({isActive, setIsActive, isValidToken, isAdmin}) {
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);
  const [viewSide, setViewSide] = useState(true);
  const navigate = useNavigate()

  console.log(isActive)
  console.log('isValidTokennnn',isValidToken)
  const [DToken, setDToken] = useState({})

  function handleLogout() {
    localStorage.removeItem("access_token");
    // setLoggedIn(false);
    window.location.reload();
  }
  
  return (
      <div
      className={`side-box ${isActive ? "active" : ""}`}
      >
        <div className="close-btn" onClick={() => setIsActive(false)}><Prev /></div>

        <div style={{fontSize:'18px', fontFamily:''}}>PODCAST
        <div style={{width:'90px', marginTop:'2px', height:'2px', backgroundColor:'red'}}></div>
        </div>
        <div>
          <div
            style={{
              fontSize: "12px",
              width: "250px",
              cursor: "pointer",
              marginTop: "30px",
              marginLeft:'-40px'
            }}
          >
            <div
              style={{
                height: "50px",
                color: hover3 ? "white" : "#c4c4c4",
                display:'flex',
                alignItems:'center',
                paddingLeft:'105px'
              }}
              onMouseEnter={() => setHover3(true)}
              onMouseLeave={() => setHover3(false)}
              onClick={() => navigate('/')}
            >
              {/* <Home /> */}
              Home
            </div>
            <div
              style={{
                height: "50px",
                color: hover1 ? "white" : "#c4c4c4",
                display:'flex',
                alignItems:'center',
                paddingLeft:'105px'
              }}
              onMouseEnter={() => setHover1(true)}
              onMouseLeave={() => setHover1(false)}
              onClick={() => navigate('/favorite')}
            >
              {/* <Favorite className="me-4" /> */}
              Favorite
            </div>
            <div
              style={{
                height: "50px",
                color: hover2 ? "white" : "#c4c4c4",
                display:'flex',
                alignItems:'center',
                paddingLeft:'105px'
              }}
              onMouseEnter={() => setHover2(true)}
              onMouseLeave={() => setHover2(false)}
              className="align-items-center d-flex"
              onClick={() => navigate('/profile')}
            >
              {/* <Profile className="me-4" /> */}
              profile
            </div>

            {
              isAdmin &&
              <div
              style={{
                height: "50px",
                color: hover2 ? "white" : "#c4c4c4",
                display:'flex',
                alignItems:'center',
                paddingLeft:'105px'
              }}
              onMouseEnter={() => setHover2(true)}
              onMouseLeave={() => setHover2(false)}
              className="align-items-center d-flex"
              onClick={() => navigate('/add_podcast')}
            >
              Add Podcast
            </div>
            }

            {
              isAdmin &&
              <div
              style={{
                height: "50px",
                color: hover2 ? "white" : "#c4c4c4",
                display:'flex',
                alignItems:'center',
                paddingLeft:'105px'
              }}
              onMouseEnter={() => setHover2(true)}
              onMouseLeave={() => setHover2(false)}
              className="align-items-center d-flex"
              onClick={() => navigate('/manage_podcast')}
            >
              Manage Podcast
            </div>
            }



            {
              isValidToken 
              ?
              <div
              style={{
                height: "50px",
                color: hover2 ? "white" : "#c4c4c4",
                display:'flex',
                alignItems:'center',
                paddingLeft:'105px'
              }}
              onMouseEnter={() => setHover2(true)}
              onMouseLeave={() => setHover2(false)}
              className="align-items-center d-flex"
              onClick={handleLogout}

            >
              {/* <Profile className="me-4" /> */}
              sign out
            </div>
              :
              <div
              style={{
                height: "50px",
                color: hover2 ? "white" : "#c4c4c4",
                display:'flex',
                alignItems:'center',
                paddingLeft:'105px'
              }}
              onMouseEnter={() => setHover2(true)}
              onMouseLeave={() => setHover2(false)}
              className="align-items-center d-flex"
              onClick={() => navigate('/login')}
            >
              {/* <Profile className="me-4" /> */}
              sign in
            </div>
            }



           
          </div>
        </div>
      </div>
  );
}
