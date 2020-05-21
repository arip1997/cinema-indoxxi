import React, { Component } from 'react';

import './index.css';
 
import { withFirebase } from '../Firebase';

import SignOutButton from '../SignOut';

import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';


 
class PenggunaPage extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      loading: false,
      users: [],
    };
  }

  componentWillUnmount() {
    this.props.firebase.users().off();
  }
 
  componentDidMount() {
    this.setState({ loading: true });
 
    this.props.firebase.users().on('value', snapshot => {
      const usersObject = snapshot.val();
 
      const usersList = Object.keys(usersObject).map(key => ({
        ...usersObject[key],
        uid: key,
      }));
 
      this.setState({
        users: usersList,
        loading: false,
      });
    });
  }
 
  render() {
    const { users, loading } = this.state;
 
    return (
      <div>
        <h1>Pengguna Aktif</h1>
 
        {loading && <div>Loading ...</div>}
 
        <UserList users={users} />
      </div>
    );
  }
}
 
const UserList = ({ users }) => (
  <ul>
    {users.map(user => (
      <li key={user.uid}>
        <span id='span'>
          <strong>E-Mail :</strong> {user.email}
        </span>
        
        <span id='span'>
         <li><strong>Username :</strong> {user.username}</li> 
        </span>
      
        <span id='span'>
        <div><Link to={ROUTES.LANDING}>
      <SignOutButton />  
  </Link>
  </div>
        </span>
        
      </li>
    ))}
  </ul>
);
 
export default withFirebase(PenggunaPage);