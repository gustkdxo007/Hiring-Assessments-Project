import React from 'react';
import { Link } from 'react-router-dom'
import GetUsers from '../components/getUsers';


const Users = () => {
    return (
        <div>
            <div>
                <Link to='/'><button>home</button></Link>
            </div>
            
           <ul>
               <h2>유저리스트</h2>
           </ul>
            <GetUsers />
        </div>
    );
};

export default Users;