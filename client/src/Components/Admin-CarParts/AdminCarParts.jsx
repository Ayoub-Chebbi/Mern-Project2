import React, { useState } from 'react'
import "./AdminCarParts.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import SideBar from '../AdminSideBar/SideBar'


const AdminCarParts = () => {
  const [PartName , setPartName] = useState("")
  const [PartImage , setPartImage] = useState("")
  const [PartCategory , setCategory] = useState("")
  const [PartType , setPartType] = useState("")
  const [PartPrice , setPrice] = useState(0)
  const [PartDate , setDate] = useState("")
  const [PartDesc , setDescription] = useState("")
  const nav = useNavigate()


  const handleSubmit = (e)=>{
    e.preventDefault()
    const newObj = {
      PartName,
      PartImage,
      PartCategory,
      PartType,
      PartPrice,
      PartDesc,
      PartDate,
    }
    axios.post("http://localhost:8000/api/car" , newObj)
        .then(res=>{
            nav("/car-parts")
        })
        .catch(err=>console.log(err))
}
  return (
    <div className='flex-carparts'>
      <SideBar/>
      <div id="login-form">
      <form onSubmit={handleSubmit}>
      <label htmlFor="Part-Name">Part Name:</label>
        <input type="text" id="Part-Name" name="Part-Name" onChange={(e)=>setPartName(e.target.value)} />
        <label htmlFor="Part-Image">Part Image:</label>
        <input type="text" id="Part-Image" name="Part-Image" onChange={(e)=>setPartImage(e.target.value)}/>
        <label htmlFor="category">Category:</label>
        <input type="text" id="category" name="category" onChange={(e)=>setCategory(e.target.value)} />
        <label htmlFor="Part-Type">Part Type:</label>
        <input type="text" id="Part-Type" name="Part-Type" onChange={(e)=>setPartType(e.target.value)} />
        <label htmlFor="Price">Price:</label>
        <input type="number" id="Price" name="Price" onChange={(e)=>setPrice(e.target.value)} />
        <label htmlFor="Date">Expiration Date:</label>
        <input type="date" id="Date" name="Date" onChange={(e)=>setDate(e.target.value)} />
        <label htmlFor="Description">Description:</label>
        <input type="text" id="Description" name="Description" onChange={(e)=>setDescription(e.target.value)} />
        <input type="submit" value="Submit"/>
      </form>
      </div>
    </div>
  )
}

export default AdminCarParts