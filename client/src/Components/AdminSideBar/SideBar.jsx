import React from 'react'
import "./SideBar.css"
import { Link } from 'react-router-dom'
import logo from "../Images/logofinal2.png"

const SideBar = () => {
  return (
    <div>
        <div className='sidebar-container'>
            <Link to="/">
                <img src={logo}/>
            </Link><br/>
            <Link to="/admin/users">Users</Link><br/>
            <Link to="/admin/car-parts">Add Car Part</Link>
        </div>
    </div>
  )
}

export default SideBar