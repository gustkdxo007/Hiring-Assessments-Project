import React from 'react';
import { Link } from 'react-router-dom'
import GetUsers from '../components/getUsers';
import './users.css';

const Users = () => {
    return (
        <div>
            <div>
                <Link to='/'><button className='users-btn'>home</button></Link>
            </div>
            
           <ul className='users-box'>
                <h2 className='users-list'>유저리스트</h2>
                <GetUsers className='users-user'/>
           </ul>
            
        </div>
    );
};

export default Users;