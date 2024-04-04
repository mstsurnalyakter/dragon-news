import React from 'react'
import Header from '../Shared/Header/Header';
import NavBar from '../Shared/NavBar/NavBar';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../Shared/RightSideNav/RightSideNav';
import BreakingNews from './BreakingNews';

const Home = () => {
  return (
    <div>
      <Header />
      <BreakingNews/>
      <NavBar />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="border border-green-500">
          <LeftSideNav />
        </div>
        <div className="lg:col-span-2 border border-green-500">
          <h1>New Coming Soon</h1>
        </div>
        <div className="border border-green-500">
          <RightSideNav />
        </div>
      </div>
    </div>
  );
}

export default Home