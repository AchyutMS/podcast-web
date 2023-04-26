import React from "react";
import {ReactComponent as ProfileImg} from '../resource/profile.svg'
import {ReactComponent as Profile2} from '../resource/profile2.svg'

export default function Profile({user}) {
  console.log(user)
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
        color: "#ddd",
      }}
    >
      <div
        style={{
          minWidth: "400px",
          width: "80%",
          boxShadow: "0 0 10px 3px #444",
          height: "500px",
          backgroundColor: "#000",
          borderRadius: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            height: "100%",
          }}
        >
          <div style={{}}>Profile page
          <div style={{width:'90px', marginBottom:'20px', height:'2px', backgroundColor:'red'}}></div></div>
          <div>
          <div style={{display:'flex', flexDirection:'column', alignItems:'start', fontSize:'12px', color:'#EA0000'}}>
              <label>Mail Id</label>
              <input type="text" placeholder={user?.email} style={{ padding: '20px', color:'white', backgroundColor:'#444', borderRadius:'10px', marginBottom:'20px', border:'none', outline:'none', width:'80%', minWidth:'300px', height:'30px'}} />
            </div>
            <div style={{display:'flex', flexDirection:'column', alignItems:'start', fontSize:'12px', color:'#EA0000'}}>
              <label>User Name</label> 
              <input type="text" placeholder={user?.name} style={{ padding: '20px', color:'white', backgroundColor:'#444', borderRadius:'10px', marginBottom:'20px', border:'none', outline:'none', width:'80%', minWidth:'300px', height:'40px'}} />
            </div>
            <div style={{display:'flex', flexDirection:'column', alignItems:'start', fontSize:'12px', color:'#EA0000'}}>
              <label>Current password</label>
              <input type="password" style={{ padding: '20px', color:'white', backgroundColor:'#444', borderRadius:'10px', marginBottom:'20px', border:'none', outline:'none', width:'80%', minWidth:'300px', height:'40px'}} />
           </div>
           <div style={{display:'flex', flexDirection:'column', alignItems:'start', fontSize:'12px', color:'#EA0000'}}>
              <label>New password</label>
              <input type="password" style={{ padding: '20px', color:'white', backgroundColor:'#444', borderRadius:'10px', marginBottom:'30px', border:'none', outline:'none', width:'80%', minWidth:'300px', height:'40px'}} />
           </div><div>
            <button style={{outline:'none', width:'100px', height:'30px', backgroundColor:'#555', border:'none', borderRadius:'5px', color:'white'}} >Update</button>
          </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
