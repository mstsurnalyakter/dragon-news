import React from 'react'
import PropTypes from 'prop-types'
import { IoLogoGoogle } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io5";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import qZone1 from '../../../assets/1.png';
import qZone2 from '../../../assets/2.png';
import qZone3 from '../../../assets/3.png';

const RightSideNav = () => {
  return (
    <div>
      <div className="p-4 space-y-3 mb-6">
        <h2>Login With</h2>
        <button className="btn btn-outline w-full">
          <IoLogoGoogle />
          Login With Google
        </button>
        <button className="btn btn-outline w-full">
          <IoLogoGithub />
          Login With Github
        </button>
      </div>
      <div className="p-4 space-y-3 mb-6">
        <h2>Find Us on</h2>
        <div className="border rounded-t-lg">
          <a
            className="p-4 flex items-center border-b gap-4 text-lg "
            href="https://web.facebook.com/mstsurnalyakter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="bg-[#F3F3F3] p-2 rounded-full">
              <FaFacebookF />
            </span>
            <span> FaceBook</span>
          </a>
          <a
            className="p-4 flex items-center border-b gap-4"
            href="https://twitter.com/mstsurnalyakter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="bg-[#F3F3F3] p-2 rounded-full">
              <FaTwitter />
            </span>
            <span>Twitter</span>
          </a>
          <a
            className="p-4  flex items-center gap-4"
            href="https://www.instagram.com/mstsurnalyakte/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="bg-[#F3F3F3] p-2 rounded-full">
              <FaInstagram />
            </span>
            <span> Instagram</span>
          </a>
        </div>
      </div>

      <div className="p-4 space-y-3 mb-6">
        <h2>Q Zone</h2>
        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />

      </div>

    </div>
  );
}

RightSideNav.propTypes = {}

export default RightSideNav