import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
    return (
        <div className='home'>
            <h1 className='home-text'>어플리케이션을 골라주세요</h1>
            <Link to='users'><button className='home-btn'>투두</button></Link>
            <Link to='board'><button className='home-btn'>게시판</button></Link>
        </div>
    );
};

export default Home;