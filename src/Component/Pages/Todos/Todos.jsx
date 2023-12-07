import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Todos = () => {
    const [todos, setTodos] = useState([])

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/todos`)
        .then((res)=>{
            console.log(res)
            setTodos(res.data);
        })
        .catch((error)=>{
            console.log(error);
        })
    },[])

  return (
    <div>
        <h1>Todos</h1>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Completed</th>
                    </tr>
                </thead>
                {
                    todos.map((item)=>{
                        return(
                            <tbody>
                                <tr>
                                    <td>{item.title}</td>
                                    <td>{item.completed ? "true" : "false"}</td>
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

export default Todos
