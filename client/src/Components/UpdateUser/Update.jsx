import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import SideBar from '../AdminSideBar/SideBar'
import "./Update.css"

const Update = () => {
    const { id } = useParams()
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [accountType, setAccountType] = useState("")
    const nav = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/user/${id}`)
            .then(res => {
                setFirstName(res.data.firstName)
                setLastName(res.data.lastName)
                setEmail(res.data.email)
                setAccountType(res.data.accountType)
            })
            .catch(err => console.log(err))
    }, [id])

    const handleUpdate = (e) => {
        e.preventDefault()
        const newObj = {
            firstName,
            lastName,
            email,
            accountType,
        }
        axios.put(`http://localhost:8000/api/user/${id}`, newObj)
            .then(res => {
                nav("/admin/users")
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='form-users'>
            <SideBar />
            <div className='form-user'>
              <h1>Update User</h1>
              <div id="login-form">
              <form onSubmit={handleUpdate}>
              <label htmlFor="firstName">First Name:</label>
                <input type="text" id="firstName" name="firstName" onChange={(e)=>setFirstName(e.target.value)} />
                <label htmlFor="lastName">Last Name:</label>
                <input type="text" id="lastName" name="lastName" onChange={(e)=>setLastName(e.target.value)}/>
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" name="email" onChange={(e)=>setEmail(e.target.value)} />
                <label htmlFor="accountType">Account Type :</label>
                <input type="accountType" id="accountType" name="accountType" onChange={(e)=>setAccountType(e.target.value)} />
                <input type="submit" value="Submit" />
              </form>
    </div>
            </div>
        </div>
    )
}

export default Update;
