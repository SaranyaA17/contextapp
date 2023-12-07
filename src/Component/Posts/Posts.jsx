import React, { useEffect, useState } from 'react'
import './posts.css'
import axios from 'axios'

const Posts = () => {
    const [posts,setPosts] = useState([])

useEffect(()=>{
    axios.get( `https://jsonplaceholder.typicode.com/posts`)
    .then((res)=>{
        console.log('Posts', res)
        setPosts(res.data)
    })
    .catch((error)=>{
        console.log(error)
    })
})

  return (
    <div>
        <h1>Posts</h1>
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Body</th>
                </tr>
            </thead>
            {
                posts.map((item)=>{
                    return(
                        <tbody>
                            <tr>
                                <td>{item.title}</td>
                                <td>{item.body}</td>
                            </tr>
                        </tbody>
                )
            })
            }
        </table>
    </div>
    // <div className='posts'>
    //   {/* <div className='post-table'> */}
    //     <h1>Posts</h1>
    //     <div>
    //     <table>
    //         <thead>
    //             <tr>
    //                 <th>Title</th>
    //                 <th>Body</th>
    //             </tr>
    //         </thead>
    //         {
    //             posts.map((item)=>{
    //                 return(
    //                     <tbody>
    //                         <tr>
    //                             <td>{item.title}</td>
    //                             <td>{item.body}</td>
    //                         </tr>
    //                     </tbody>
    //                 )
    //             })
    //         }
    //     </table>
    //     </div>
    //   {/* </div> */}
    // </div>
  )
}

export default Posts
