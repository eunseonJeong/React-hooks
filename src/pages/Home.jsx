import React from 'react'
import Header from '../components/Header';
import { Link, Outlet } from 'react-router-dom';

const Home = () => {
    return (
      <div>
        <Header/>
        <h1>This is App1</h1>

        {/* <Link to='/'>홈</Link> <br />
        <Link to='/login'>로그인</Link> <br />
        <Link to='/logout'>로그아웃</Link> */}
        <Outlet />

      </div>
    );
  }

export default Home;

