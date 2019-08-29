import React, { Component } from 'react';
import axios from 'axios';
import User from './user';



const userurl = 'http://127.0.0.1:3001'

class GetUsers extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            users: []
        };
    }

    async componentDidMount() {
        let data = await axios.get(userurl + '/users')
                    .then(res => res.data)
                    .catch(err => console.log(err))
        this.setState(this.state.users = data)
        // let { data: users} = await axios.get(userurl + '/users');
        // this.setState({ users });
    }

    render() {
        const { users } = this.state;
        return (
        users.map(user => <User key={user.id} user={user} />)
        );
    }
}

export default GetUsers;