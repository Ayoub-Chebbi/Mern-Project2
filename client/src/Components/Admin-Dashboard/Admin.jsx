import React from 'react'
import SideBar from '../AdminSideBar/SideBar'
import "./Admin.css"
const Admin = () => {
  return (
    <div className='dashboard-container'>
      <SideBar />
      <div className='admin-text'>
        <h1>Welcome Admin</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, atque beatae explicabo, fugiat in repellat voluptatum sequi, laudantium harum veritatis eaque delectus obcaecati cum fuga nobis laborum autem earum provident.</p>
      </div>
    </div>
  )
}

export default Admin