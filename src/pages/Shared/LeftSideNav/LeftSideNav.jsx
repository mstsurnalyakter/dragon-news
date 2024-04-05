import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import useNewsData from "../../../hooks/useNewsData";
import { CiCalendar } from "react-icons/ci";
import useCategories from "../../../hooks/useCategories";

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

const LeftSideNav = () => {
  const { newsData, loading } = useNewsData();
  const { categories } = useCategories();

  return (
    <div>
      <h2 className="text-[#403F3F] mb-5 font-semibold text-xl">
        All Categories
      </h2>
      <div className="space-y-1">
        {categories.map((category) => (
          <NavLink
            to={`/category/${category.id}`}
            className={({ isActive }) =>
              isActive
                ? "text-[ #403F3F] p-4 rounded-md bg-[#E7E7E7] text-xl font-semibold block text-center"
                : "text-[#9F9F9F] p-4 rounded-md  text-xl font-medium block text-center"
            }
            key={category.id}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
      <div className="space-y-4">
        {newsData.map((data) => {
          const { thumbnail_url, title, author } = data || {};
          const date = new Date(author.published_date);
          const formattedDate = date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          });
          return (
            <Card key={data._id} className="">
              <CardHeader
                floated={false}
                className="h-52 object-cover shadow-none"
              >
                <figure className="object-cover w-full  rounded h-64">
                  <img
                    role="presentation"
                    className="w-full h-full"
                    src={thumbnail_url}
                  />
                </figure>
              </CardHeader>
              <CardBody className="text-center">
                <Typography variant="h4" color="blue-gray" className="mb-2">
                  {title}
                </Typography>

                <div className="flex items-center gap-2">
                  <CiCalendar />
                  <p>{formattedDate}</p>
                </div>
              </CardBody>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

LeftSideNav.propTypes = {};

export default LeftSideNav;
