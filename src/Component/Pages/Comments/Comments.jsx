import React, { useEffect, useState } from 'react'
import './comments.css'
import axios from 'axios'

const Comments = () => {
    const [comments,setComments] = useState([])

    useEffect(()=>{
        axios.get( `https://jsonplaceholder.typicode.com/comments`)
        .then((res)=>{
            console.log(res)
            setComments(res.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    })

  return (
    <div  className="title">
        <h1>Comments</h1>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Body</th>
                    </tr>
                </thead>
                {
                    comments.map((item)=>{
                        return(
                            <tbody>
                                <tr>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.body}</td>
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

export default Comments
