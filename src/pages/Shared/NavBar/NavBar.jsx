import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
// import {
//   Bars4Icon,
//   GlobeAmericasIcon,
//   NewspaperIcon,
//   PhoneIcon,
//   RectangleGroupIcon,
//   SquaresPlusIcon,
//   SunIcon,
//   TagIcon,
//   UserGroupIcon,
// } from "@heroicons/react/24/solid";

// function NavListMenu() {
//   const [isMenuOpen, setIsMenuOpen] = React.useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
//   const renderItems = navListMenuItems.map(
//     ({ icon, title, description }, key) => (
//       <a href="#" key={key}>
//         <MenuItem className="flex items-center gap-3 rounded-lg">
//           <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
//             {" "}
//             {React.createElement(icon, {
//               strokeWidth: 2,
//               className: "h-6 text-gray-900 w-6",
//             })}
//           </div>
//           <div>
//             <Typography
//               variant="h6"
//               color="blue-gray"
//               className="flex items-center text-sm font-bold"
//             >
//               {title}
//             </Typography>
//             <Typography
//               variant="paragraph"
//               className="text-xs !font-medium text-blue-gray-500"
//             >
//               {description}
//             </Typography>
//           </div>
//         </MenuItem>
//       </a>
//     )
//   );

//   return (
//     <React.Fragment>
//       <Menu
//         open={isMenuOpen}
//         handler={setIsMenuOpen}
//         offset={{ mainAxis: 20 }}
//         placement="bottom"
//         allowHover={true}
//       >
//         <MenuHandler>
//           <Typography as="div" variant="small" className="font-medium">
//             <ListItem
//               className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
//               selected={isMenuOpen || isMobileMenuOpen}
//               onClick={() => setIsMobileMenuOpen((cur) => !cur)}
//             >
//               Resources
//               <ChevronDownIcon
//                 strokeWidth={2.5}
//                 className={`hidden h-3 w-3 transition-transform lg:block ${
//                   isMenuOpen ? "rotate-180" : ""
//                 }`}
//               />
//               <ChevronDownIcon
//                 strokeWidth={2.5}
//                 className={`block h-3 w-3 transition-transform lg:hidden ${
//                   isMobileMenuOpen ? "rotate-180" : ""
//                 }`}
//               />
//             </ListItem>
//           </Typography>
//         </MenuHandler>
//         <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
//           <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
//             {renderItems}
//           </ul>
//         </MenuList>
//       </Menu>
//       <div className="block lg:hidden">
//         <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
//       </div>
//     </React.Fragment>
//   );
// }

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 w-full  items-center gap-6 justify-center lg:w-auto  lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Typography
        variant="small"
        color="blue-gray"
        className="font-medium w-full"
      >
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "underline bg-purple-500 rounded-lg text-white px-4 py-2 flex items-center justify-center  gap-2 "
              : "flex items-center justify-center"
          }
        >
          Home
        </NavLink>
      </Typography>
      <Typography
        variant="small"
        color="blue-gray"
        className="font-medium w-full"
      >
        <NavLink
          to={"/about"}
          className={({ isActive }) =>
            isActive
              ? "underline bg-purple-500 rounded-lg text-white px-4 py-2 flex items-center justify-center  gap-2 "
              : "flex items-center justify-center"
          }
        >
          About
        </NavLink>
      </Typography>
      <Typography
        variant="small"
        color="blue-gray"
        className="font-medium w-full"
      >
        <NavLink
          to={"/career"}
          className={({ isActive }) =>
            isActive
              ? "underline bg-purple-500 rounded-lg text-white  px-4 py-2 flex items-center justify-center  gap-2 "
              : "flex items-center justify-center"
          }
        >
          Career
        </NavLink>
      </Typography>
      <Typography
        variant="small"
        color="blue-gray"
        className="font-medium w-full"
      >
        <NavLink
          to={"/login"}
          className={({ isActive }) =>
            isActive
              ? "underline bg-purple-500 rounded-lg text-white  px-4 py-2 flex items-center justify-center  gap-2 "
              : "flex items-center justify-center"
          }
        >
          Login
        </NavLink>
      </Typography>
    </List>
  );
}

const NavBar = () => {
  const [openNav, setOpenNav] = useState(false);
  const {logOut,user} = useContext(AuthContext);

  const handleSingOut = () =>{
    logOut()
    .then(()=>{
      alert("You are LogOut");
    })
    .catch(error=>{
      console.error(error);
    })
  }

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className="mx-auto mb-10 max-w-screen-xl px-4 py-2 shadow-none">
      <div className="flex items-center justify-between text-blue-gray-900">
        <div className="hidden flex-grow items-center justify-center  lg:flex">
          <NavList />
        </div>
        <div className="hidden gap-2 lg:flex">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          {user ? (
            <Button
              onClick={handleSingOut}
              size="sm"
              color="blue-gray"
              className="capitalize"
            >
              Sign Out
            </Button>
          ) : (
            <Button size="sm" color="blue-gray">
              <Link to={"/login"} className="capitalize">
                Log In
              </Link>
            </Button>
          )}
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <div className="flex items-center justify-center">
          <NavList />
        </div>
        <div className="flex w-full flex-col flex-nowrap items-center gap-2 lg:hidden">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>

          {user ? (
            <Button
              onClick={handleSingOut}
              size="sm"
              color="blue-gray"
              className="capitalize"
            >
              Sign Out
            </Button>
          ) : (
            <Button size="sm" color="blue-gray">
              <Link to={"/login"} className="w-full capitalize">
                Log In
              </Link>
            </Button>
          )}
        </div>
      </Collapse>
    </Navbar>
  );
};

NavBar.propTypes = {};

export default NavBar;
