import React from 'react';
import { Link } from 'react-router-dom';
import './user.css'


const User = (props) => {
    return (
        <div>
            <li className='user' style={{ textDecoration: 'none' }}><Link to={`/users/${props.user.id}`}>{props.user.name}</Link></li>
        </div>
    );
};

export default User;