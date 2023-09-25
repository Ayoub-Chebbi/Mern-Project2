import React, { useEffect, useState } from 'react'
import "./Parts.css"
import axios from 'axios'
import NavBar from "../NavBar/Navbar"
import { Link } from 'react-router-dom'
const Parts = () => {
  const [parts , setParts] = useState([])
  useEffect(()=>{
    axios.get("http://localhost:8000/api/cars")
      .then(res=>{
        setParts(res.data)
      })
      .catch(err=>console.log(err))
  },[])
  return (
    <div>
      <NavBar />
      <h1 style={{textAlign:"center"}}>Car Parts</h1>
      {parts.map((part)=>{
        return <div>
          <div className='container column'>
          <div className='container-parts'>
          <div className='flex-text'>
            <div className='left-section'>
              <h4>Part Name : {part.PartName}</h4>
              <p>Part Description : {part.PartDesc}</p>
              <p>Part Category : {part.PartCategory}</p>
              <p>Part expiration Date : {part.PartDate}</p>
              <h3>Part Price :{part.PartPrice}$</h3>
            </div>
            <div className='right-section'>
            <button className='btn-edit'>Contact to buy</button>
            </div>
          </div>
          <img style={{maxWidth : "200px"}} src={part.PartImage}/>
          </div>
          </div>
        </div>
      })}
    </div>
  )
}

export default Parts