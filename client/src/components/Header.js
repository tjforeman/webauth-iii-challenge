import React from 'react'
import {NavLink} from 'react-router-dom'

class Header extends React.Component{
render(){
    return(
        <div className='header'>
        <NavLink to='/register'>Sign Up</NavLink>
        <NavLink to='/login'>Log In</NavLink>
        <NavLink to='/users'>Users</NavLink>
        </div>
    )
}
}

export default Header