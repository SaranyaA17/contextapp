import React, { useEffect, useState } from 'react'
import './user.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Users = () => {
    const [users,setUsers] = useState([])
    const navigate = useNavigate()

useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then((res)=>{
        console.log(res)
        setUsers(res.data)
    })
    .catch((error)=>{
        console.log(error)
    })
},[])

const handleEdit = (item)=>{
    navigate('/NewUsers', {state:item})
}


  return (
    <div className='users'>
         <h1>Users</h1>
        <div>
            <table>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>city</th>
                    <th>Action</th>
                    </tr>
                </thead>
                
            {
                users.map((item)=>{
                    return(
                        <tbody>
                            <tr>
                            <td>{item.name}</td>
                            <td>{item.phone}</td>
                            <td>{item.address.city}</td>
                            <td className='edt-dlt'>
                                <span onClick={()=>handleEdit(item)}>Edit</span>/
                                <span>Delete</span>
                                {/* <span onClick={()=>handleEdit(item)} >Edit</span>/
                                <span onClick={()=>handleDelete(item.id)}>Delete</span> */}
                            </td>
                            </tr>
                        </tbody>
                    )
                })
            }
            </table>

        </div>
    </div>
  )
}

export default Users
