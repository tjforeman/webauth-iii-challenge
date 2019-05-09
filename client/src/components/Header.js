import React from 'react'
import {NavLink} from 'react-router-dom'

class Header extends React.Component{
handleLogout= () =>{ 
localStorage.removeItem('jwt');
this.props.history.push('/login');
}
render(){
    return(
        <div className='header'>
        <NavLink to='/register'>Sign Up</NavLink>
        <NavLink to='/login'>Log In</NavLink>
        <NavLink to='/users'>Users</NavLink>
        <button type="button" onClick={this.handleLogout}>
          Logout
        </button>
        </div>
    )
}
}

export default Header