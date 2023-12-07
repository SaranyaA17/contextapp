import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './newusers.css'
import { InfinitySpin } from 'react-loader-spinner'
import {  useLocation, useNavigate } from 'react-router-dom'





const NewUsers = () => {
 const navigate = useNavigate()

  const location = useLocation()

  const [newUsers,setNewUsers] = useState([])
  const [name,setName] = useState(
    location.state && location.state.name ? location.state.name : ''
  )
  const [email,setEmail] = useState(
    location.state && location.state.email ? location.state.email : ''
  )
  const [phone,setPhone] = useState(
    location.state && location.state.phone ? location.state.phone : ''
  )
  const [uniqueValue,setUniqueValue] = useState('')

useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then((res)=>{
        console.log(res)
        setNewUsers(res.data)
    })
    .catch((error)=>{
      console.log(error)
    })

},[])

const handleDelete = (id)=>{
  axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
  .then((res)=>{
    console.log(res);
    setNewUsers(newUsers.filter((users)=> users.id !== id));
  })
  .catch((error)=>{
    console.log(error);
  })
};

const handleCreate = ()=>{
  axios.post(`https://jsonplaceholder.typicode.com/users`, {body: {
    name:name,
    email:email,
    phone:phone,
  }})
  .then((res)=>{
    console.log(res)
    
    setName('')
    setEmail('')
    setPhone('')
  })
  .catch((error)=>{
    console.log(error)
  })
}

const handleEdit = (item)=>{
  setUniqueValue(item.id)
  setName(item.name)
  setEmail(item.email)
  setPhone(item.phone)
}

const updateData= ()=>{
  axios.put(`https://jsonplaceholder.typicode.com/users/${location.state.id}`,{body: {
    name:name,
    email:email,
    phone:phone,
}})
  .then((res)=>{
    console.log(res)
    navigate('/users')
    // setName('')
    // setEmail('')
    // setPhone('')
    // setUniqueValue('')
  })
  .catch((error)=>{
    console.log(error)
  })
}



  return (
    <div className='new-users'>
      <div className='new-users-form'>
        <div>
          <label>Name</label>
          <input type='text' value={name} name='name' id='name' onChange={(e)=>setName(e.target.value)} />
        </div>
        <div>
          <label>Email</label>
          <input type='text' value={email} name='email' id='email' onChange={(e)=>setEmail(e.target.value)} />
        </div>
        <div>
          <label>Phone</label>
          <input type='text' value={phone} name='phone' id='phone' onChange={(e)=>setPhone(e.target.value)}/>
        </div>
        <div>
          {/* <button onClick={uniqueValue ? updateData : handleCreate}>{uniqueValue ? 'Update' : 'Submit'}</button>
           */}
           <button onClick={updateData}>Submit</button>
        </div>
      </div>
      {/* <h1>NewUsers</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>phone</th>
            <th>Action</th>
          </tr>
        </thead>
        {
          newUsers.length === 0 ?

          <InfinitySpin 
            width='200'
            color="#4fa94d"
          />
          :

          newUsers.map((item)=>{
            return(
              <tbody>
                <tr>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td className='edt-dlt'>
                    <span onClick={()=>handleEdit(item)} >Edit</span>/
                    <span onClick={()=>handleDelete(item.id)}>Delete</span>
                  </td>
                </tr>
              </tbody>
            )
          })
          
        }
      </table> */}
     
    </div>
  )
}

export default NewUsers
