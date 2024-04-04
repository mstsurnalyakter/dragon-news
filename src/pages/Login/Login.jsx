import React from "react";
import PropTypes from "prop-types";
import NavBar from "../Shared/NavBar/NavBar";

import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Login = () => {


    const handleLogin = () =>{

    }

  return (
    <div>
      <NavBar />
      <Card
        color="transparent"
        className="shadow-2xl mt-32 max-w-3xl  mx-auto py-20"
      >
        <Typography variant="h4" color="blue-gray" className="text-center mb-6">
          Login your account
        </Typography>
        <div className="border-b-2 w-3/4 mx-auto"></div>
        <form onSubmit={handleLogin} className="mt-8 mb-2 w-3/4 mx-auto">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Email address
            </Typography>
            <Input
              size="lg"
              type="email"
              name="email"
              required
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900 !bg-[#F3F3F3]"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Password
            </Typography>
            <Input
              type="password"
              name="password"
              required
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900 !bg-[#F3F3F3]"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            {/*
            <Typography color="gray" className="font-normal">
              <Link
                onClick={handleForgetPassword}
                className="font-medium underline text-blue-900"
              >
                Forget Password
              </Link>
            </Typography> */}
          </div>

          <Button type="submit" className="mt-6 capitalize" fullWidth>
            Login
          </Button>
          {/* {loginError && <small className="text-red-500">{loginError}</small>}
          {success && <small className="text-green-500">{success}</small>} */}
          <Typography color="gray" className="mt-4 text-center font-normal">
            Don&apos;t Have An Account ?
            <Link
              to={"/register"}
              className="font-medium underline text-gray-900"
            >
              Register here
            </Link>
          </Typography>
        </form>
      </Card>
    </div>
  );
};

Login.propTypes = {};

export default Login;
