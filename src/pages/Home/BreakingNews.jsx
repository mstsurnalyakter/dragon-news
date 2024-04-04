import React from 'react'
import PropTypes from 'prop-types';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';

const BreakingNews = () => {
  return (
    <div className='flex items-center'>
      <button className="btn btn-secondary">Breaking News</button>
      <Marquee  pauseOnHover={true} speed={100}>
        <Link className='mr-10' to={"/"}>
          I can be a React component, multiple React components, or just some
          text.....
        </Link>
        <Link className='mr-10' to={"/"}>
          I can be a React component, multiple React components, or just some
          text.....
        </Link>
        <Link className='mr-10' to={"/"}>
          I can be a React component, multiple React components, or just some
          text.....
        </Link>
      </Marquee>
    </div>
  );
}

BreakingNews.propTypes = {}

export default BreakingNews