import React, { useEffect, useState } from 'react'
import "./AdminUsers.css"
import axios from 'axios'
import { Link } from 'react-router-dom'
import SideBar from '../AdminSideBar/SideBar'
const AdminUsers = () => {
  const [users , setUsers] = useState([])
  const handleDelete = (userId) => {
    axios.delete(`http://localhost:8000/api/user/${userId}`)
        .then(() => {
            const filtredUsers = users.filter((eachUser) => {
                return eachUser._id !== userId;
            });
            setUsers(filtredUsers);
        })
        .catch((error) => {
            console.error("Error deleting User:", error);
        });
};
  useEffect(()=>{
    axios.get("http://localhost:8000/api/allusers")
      .then(res=>{
        setUsers(res.data)
      })
  },[])
  return (
    <div className='flex-admin_users'>
      <SideBar />
      <div className='users-info'>
        <h1>Users</h1>
      {users.map((user)=>{
        return <div>
          <table>
            <tr>
              <td>first Name</td>
              <td>last Name</td>
              <td>Email</td>
              <td>Account type</td>
              <td>Action</td>
            </tr>
            <tr>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.accountType}</td>
              <td>
                <button onClick={() => { handleDelete(user._id) }} style={{marginRight : "5px"}}>
                  delete
                </button>
                <Link to={`/admin/user/edit/${user._id}`}>edit</Link>
              </td>
            </tr>
          </table>
        </div>
      })}
      </div>
    </div>
  )
}

export default AdminUsers