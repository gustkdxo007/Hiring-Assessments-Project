import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const userUrl = 'http://127.0.0.1:3001/users/';

class UserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            
        }
    }

    async componentDidMount() {
        let data = await axios.get(userUrl + this.props.match.params.id)
                    .then(res => res.data)
                    .catch(err => console.log(err))
        this.setState({
            user: data
        })
    }


    render() {
       const { id, name, email, phone, street} = this.state.user;

        return (
            <div>
                <div>
                    <Link to='/'><button>home</button></Link>
                    <Link to='/users'><button>뒤로가기</button></Link>
                    <div>
                        <img src={`https://randomuser.me/api/portraits/men/${id}.jpg`} alt={name} />
                    </div>
                    <div>
                        이름 : {name}
                    </div>
                    <div>
                        E-mail : {email}
                    </div>
                    <div>
                        연락처 : {phone}
                    </div>
                    <div>
                        주소 : {street}
                    </div>
                </div>
            </div>
        );
    }
}

export default UserInfo;