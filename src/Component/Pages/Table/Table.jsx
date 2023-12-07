import React from 'react'
import { useContext } from 'react'
import { FormContext } from '../../Context/FormContext'
import { Link } from 'react-router-dom'

const Table = () => {
  const {formValueArray,handleDelete,handleEdit} = useContext(FormContext)
  
  return (
    <div>
      <div className='result'>
          <h2>
            Result
          </h2>
          <div>
            <table>
              <thead>
                <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  formValueArray && formValueArray.map((e)=>{
                  return(
                    <tr>
                    <td>{e.name}</td>
                    <td>{e.email}</td>
                    <td>{e.password}</td>
                    
                    <td>
                      <Link to='/'> <span onClick={()=>handleEdit(e)}>Edit</span>/ </Link>
                      <span onClick={()=>handleDelete(e.name)}>Delete</span>
                    </td>
                    </tr>
                   )
                  })
                }    
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
              </tr>
            </thead>
          </table>
        </div>
    </div>
  )
}

export default Table
