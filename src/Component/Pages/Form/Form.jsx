import React, { useContext, useEffect, useState } from 'react'
import {FormContext} from '../../Context/FormContext'
import './form.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Form = () => {
  const {handleOnChange,formValues,handleSubmit,formUniqueValue,handlUpdate} = useContext(FormContext)
   const [users, setUsers] = useState([])

   const [name,setName] = useState('')
   const [email,setEmail] = useState('')
   const [phone,setPhone] = useState('')



// const getUsersData = ()=>{
//   axios.get(`https://jsonplaceholder.typicode.com/users`)
//   .then((res)=>{
//     console.log(res)
//     setUsers(res.data)
//   })
//   .catch((error)=>{
//     console.log(error)
//   })
// }

const createData = ()=>{
  axios.post(`https://jsonplaceholder.typicode.com/users`, {body: {
    name: name,
    email: email,
    phone: phone,
  }})
  .then((res)=>{
    console.log(res)
  })
  .catch((error)=>{
    console.log(error)
  })
}


console.log(users,'users')

  return (
  <div>



    {/* <div className='form-title' >
      <div className='form-lable-input'>
        <div >
          <label>User Name:</label>
          <input type="text" name="name" id="name" value={formValues.name}   onChange={(e)=>handleOnChange('name',e.target.value)}/>
        </div>
        <div>
          <label>Email:</label>
          <input type="text" name="email" id="email" value={formValues.email} onChange={(e)=>handleOnChange('email', e.target.value)}/>
        </div>
        <div>
          <label>Phone:</label>
          <input type="text" name="phone" id="phone" value={formValues.password}  onChange={(e)=>handleOnChange('password',e.target.value)}/>
        </div>
        <div className='form-btn'>
         <Link to={'/table'}> <button onClick={formUniqueValue ? handlUpdate : handleSubmit}>{formUniqueValue ? 'submit' : 'Login'}</button> </Link>
        </div>
        
      </div>
    </div> */}

<div className='form-title' >
      <div className='form-lable-input'>
        <div >
          <label>User Name:</label>
          <input type="text" name="name" id="name" value={name} onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div>
          <label>Email:</label>
          <input type="text" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div>
          <label>Phone:</label>
          <input type="text" name="phone" id="phone" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
        </div>
        <div className='form-btn'>
        <button onClick={createData}> Create</button> 
        </div>
        
      </div>
    </div>
    </div>
  )
}

export default Form
