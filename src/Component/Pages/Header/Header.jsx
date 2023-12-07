import React from 'react'
import './header.css'
import { useNavigate } from 'react-router-dom'

const Header = () => {

    const navigate = useNavigate()

  return (
    <div className='navbar'>
      <div className='nav-menus'>
        <div className='nave-logo' onClick={()=>navigate('/')}>SARA</div>
        <ul>
            <li onClick={()=>navigate('/users')}>Users</li>
            <li onClick={()=>navigate('/posts')}>Posts</li>
            <li onClick={()=>navigate('/comments')}>Comments</li>
            <li onClick={()=>navigate('/todos')}>Todos</li>
            <li onClick={()=>navigate('/photos')}>Photos</li>
            <li onClick={()=>navigate('/newusers')}>NewUsers Form</li>
        </ul>
      </div>
    </div>
  )
}

export default Header
