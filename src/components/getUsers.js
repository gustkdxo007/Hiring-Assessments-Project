import React, { Component } from 'react';
import axios from 'axios';


const userurl = 'http://koreanjson.com'

class GetUsers extends Component {
    constructor(props) {
        super(props);
        this.state = { users: []};
    }

    async componentDidMount() {
        let { data: users} = await axios.get(userurl + '/users');
        this.setState({ users });
    }

    render() {
        const { users } = this.state;
      
        return (
            users.map(user => {
                return (
                    <div key={user.id}>
                    <div>{users.name}</div>
                    </div>
                )
            })
        );
    }
}

export default GetUsers;