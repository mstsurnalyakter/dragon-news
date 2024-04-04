import React from 'react'
import PropTypes from 'prop-types';
import logo from '../../../assets/logo.png';
import moment from 'moment';

const Header = () => {
  return (
    <div className="text-center">
      <h2 className="text-2xl">
        <img className="mx-auto mt-10 mb-5" src={logo} alt="" />
        <p className="text-[#706F6F] mb-3 text-lg">
          Journalism Without Fear or Favour
        </p>
        <p className="text-xl text-[ #403F3F] mb-6 font-medium">
          {moment().format("dddd, MMMM D, YYYY")}
        </p>
      </h2>
    </div>
  );
}

Header.propTypes = {}

export default Header