import React from 'react';
import GetUsers from '../components/getUsers';


const Users = ({history}) => {
    
    return (
        <div>
            <div>
                <button onClick={() => {history.push('/')}}>home</button>
            </div>
            
            <select name='usersList' size='7'>
                <option value='' defaultValue>유저 리스트</option>
            </select>
            <GetUsers />
        </div>
    );
};

export default Users;