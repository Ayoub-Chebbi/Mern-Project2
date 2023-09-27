import React, { useEffect, useState } from 'react';
import './AdminUsers.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SideBar from '../AdminSideBar/SideBar';

const AdminUsers = () => {
  const [users, setUsers] = useState([]);

  const handleDelete = (userId) => {
    axios
      .delete(`http://localhost:8000/api/user/${userId}`)
      .then(() => {
        const filteredUsers = users.filter((eachUser) => {
          return eachUser._id !== userId;
        });
        setUsers(filteredUsers);
      })
      .catch((error) => {
        console.error("Error deleting User:", error);
      });
  };

  useEffect(() => {
    axios.get("http://localhost:8000/api/allusers")
      .then(res => {
        setUsers(res.data);
      });
  }, []);

  return (
    <div className='flex-admin_users'>
      <SideBar />
      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((item, index) => (
              <tr key={index}>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.email}</td>
                <td>{item.accountType}</td>
                <td>
                  <button onClick={() => { handleDelete(item._id) }}>
                    <i className="fa fa-trash-o" style={{ fontSize: "36px" }}></i>
                  </button>
                  <Link to={`/admin/user/edit/${item._id}`}>
                    edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminUsers;
