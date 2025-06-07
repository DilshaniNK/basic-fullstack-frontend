import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserIcon } from '@heroicons/react/24/solid';

export default function Adduser() {
    let navigate = useNavigate()
    const [user,setUsers] = useState({
        name:"",
        username:"",
        email:""
    })
    const {name,username,email} = user
    const onInputChange=(e)=>{
        setUsers({...user, [e.target.name]: e.target.value})
    }
    const onSubmit=async(e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8080/user", user)
        alert("User Registertion Successfully")
        navigate("/")
    }

  return (
    <div className='container'>
        <div className='row'>
          
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-4 shadow hover-move' style={{backgroundColor: "#6f9bbc" ,boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.15)"}}>
                
                        
                <h2 className='text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent '>Register User<hr/></h2>
                <p className='text-gray-600 mt-2'>Create a new user account</p>

                <form onSubmit={(e)=>onSubmit(e)} className='space-y-6'>
                <div className='mb-3'>
                  <label htmlFor='Name' className='text-start d-block fw-semibold'>
                    Full Name
                  </label>
                  <input
                    type={"text"}
                    className='form-control'
                    placeholder='Enter your full name'
                    name='name'
                    value={name}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className='mb-3'>
                  <label htmlFor='Name' className='text-start d-block fw-semibold'>
                    Username
                  </label>
                  <input
                    type={"text"}
                    className='form-control'
                    placeholder='Enter your Username'
                    name='username'
                    value={username}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
              <div className='mb-3'>
                  <label htmlFor='Name' className='text-start d-block fw-semibold'>
                    E-mail
                  </label>
                  <input
                    type={"text"}
                    className='form-control'
                    placeholder='Enter your e-mail address'
                    name='email'
                    value={email}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                
                <button type='submit' className='btn btn-outline-primary'>Submit</button>
                <Link className='btn btn-outline-danger mx-2' to="/">Cancel</Link>
                </form>
            </div>
        </div>
    </div>
  )
}
