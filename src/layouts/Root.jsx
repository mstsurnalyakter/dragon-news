import React from 'react'
import PropTypes from 'prop-types'
import { Outlet } from 'react-router'

const Root = () => {
  return (
    <div className="font-poppins">
      <div className='max-w-6xl mx-auto px-4'>
        <Outlet />
      </div>
    </div>
  );
}

Root.propTypes = {}

export default Root