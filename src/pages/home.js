import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>어플리케이션을 골라주세요</h1>
            <Link to='users'><button>투두</button></Link>
            <Link to='board'><button>게시판</button></Link>
        </div>
    );
};

export default Home;