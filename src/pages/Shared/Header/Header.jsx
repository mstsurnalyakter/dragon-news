import React from 'react'
import PropTypes from 'prop-types';
import logo from '../../../assets/logo.png';
import moment from 'moment';

const Header = () => {
  return (
    <div className='text-center'>
      <h2 className="text-2xl">
        <img className='mx-auto' src={logo} alt="" />
        <p>Journalism Without Fear or Favour</p>
        <p className="text-xl">{moment().format("dddd, MMMM D, YYYY")}</p>
      </h2>
    </div>
  );
}

Header.propTypes = {}

export default Header