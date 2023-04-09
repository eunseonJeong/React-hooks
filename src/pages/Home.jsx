import React from 'react'
import Header from '../components/Header';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
      <div>
        <Header/>
        <Link to='/'>홈</Link> <br />
        <Link to='/login'>로그인</Link> <br />
        <Link to='/logout'>로그아웃</Link>
      </div>
    );
  }

export default Home;

