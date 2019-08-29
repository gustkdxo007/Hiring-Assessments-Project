import React from 'react';
import { Link } from 'react-router-dom';


const User = (props) => {
    return (
        <div>
            <li><Link to={`/users/${props.user.id}`}>{props.user.name}</Link></li>
        </div>
    );
};

export default User;