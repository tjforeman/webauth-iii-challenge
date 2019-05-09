import React from 'react';
import axios from 'axios';
class UsersList extends React.Component {
    state = {
      users: [],
    };
    componentDidMount() {
        const token = localStorage.getItem('jwt');
        const requestConfig = {
          headers: {
            authorization: token,
          },
        };
        axios
          .get('http://localhost:8000/api/users', requestConfig)
          .then(res => {
            this.setState({users: res.data});
          })
          .catch(err => console.error(err));
      }

render() {
    return (
      <>
        <h2>Our Users</h2>
        <ul>
          {this.state.users.map(user => (
            <div className='users-wrapper'>
            <ul key={user.id}>Name: {user.username}</ul>
            <ul>Department: {user.department}</ul>
            <ul>User id: {user.id}</ul>
            </div>
          ))}
        </ul>
      </>
    );
  }

}


export default UsersList