import React, { useEffect, useState } from 'react'
import { ReactComponent as Bin } from '../resource/bin.svg';
export default function ManagePodcast() {

  const [data, setData] = useState([])
  const [token, setToken] = useState() 

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:8800/api/podcasts/random');
      const data = await response.json()

      setToken(localStorage.getItem('access_token'))
      
      setData(data)

    }
    
    fetchData();
  }, []);

  const handleDelete = async(id) => {
    setData(data.filter(d => d._id !== id));
    const response = await fetch(`http://localhost:8800/api/admin/${id}`,{method:'delete'});
    
    console.log(response)
  }

  return (
    <div style={{width:'100%', height:'100vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
      <div style={{width:'80%', minWidth:'500px',height:'80vh', backgroundColor:'#010',borderRadius:'10px', boxShadow:'0 0 10px 5px #333'  }}>
        <div>Manage Podcast</div>
        <div>
        <table className="table-fixed">
          <thead>
            <tr
              style={{
                height: "50px",
                backgroundColor: "#6868ED",
                color: "white",
                fontSize: "12px",
                textTransform: "uppercase",
                letterSpacing: "2px",
              }}
            >
              <th style={{ paddingLeft: "10px", paddingRight: "10px" }}>S.no</th>
              <th style={{ paddingLeft: "10px", paddingRight: "10px" }}>Name</th>
              <th style={{ paddingLeft: "10px", paddingRight: "10px" }}></th>
            </tr>
          </thead>
          <tbody style={{ backgroundColor: "#EFEFEF" }}>
            {data.map((d,i) => {
              return (

              
                      <React.Fragment key={i+1}>
                        <tr
                          className="table-row"
                          style={{color:'black'}}
                        >
                          <td>{i}</td>
                          <td>{d.title}</td>
                          <td onClick={() => {handleDelete(d._id)}}><Bin /></td>
                          </tr>
                        
                      </React.Fragment>
                  )
                })}
          </tbody>
        </table>
        </div>
      </div>
    </div>
  )
}