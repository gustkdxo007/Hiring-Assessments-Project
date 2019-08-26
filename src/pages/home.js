import React from 'react';

const Home = ({history}) => {
    return (
        <div>
            <h1>어플리케이션을 골라주세요</h1>
            <button onClick={() => {history.push('/users')}}>투두</button>
            <button onClick={() => {history.push('/board')}}>게시판</button>
        </div>
    );
};

export default Home;