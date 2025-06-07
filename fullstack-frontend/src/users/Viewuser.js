import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function Viewuser() {
    const [user,setUsers] = useState({
        name:"",
        username:"",
        email:""
    })
    const {id} = useParams();
    useEffect (()=>{
        loadUser();
    },[])
    const loadUser=async()=>{
        const result =await axios.get(`http://localhost:8080/user/${id}`);
        setUsers(result.data);
    }
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-4 shadow hover-move'>
                <h2 className='text-center m-4 '>User Details</h2>
                <div className='card border-none'>
                    <div className='card-header'>
                        <div className='fw-semibold'>Details of User id: {user.id}</div>
                        <ul className='list-group list-group-flush text-start d-block'>
                            <li className='list-group-item'>
                                <b>Name : </b>
                                {user.name}
                            </li>
                            <li className='list-group-item'>
                                <b>Username : </b>
                                {user.username}
                            </li>
                            <li className='list-group-item'>
                                <b>E-mail : </b>
                                {user.email}
                            </li>
                        </ul>
                    </div>
                </div>
                <Link className='btn btn-primary my-2' to={"/"}>Back to Home</Link>
            </div>
        </div>
    </div>
  )
}
