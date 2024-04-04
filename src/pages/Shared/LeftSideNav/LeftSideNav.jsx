
import PropTypes from 'prop-types'
import {  NavLink } from 'react-router-dom'
import useNewsData from '../../../hooks/useNewsData';
import { CiCalendar } from "react-icons/ci";
import useCategories from '../../../hooks/useCategories';

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

const LeftSideNav = () => {
  const {newsData,loading} = useNewsData();
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
            // to={"/"}
            // className="block ml-4 text-xl font-semibold "
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
      <div className='space-y-4'>
        {newsData.slice(0,3).map((data) =>{
          const {
         thumbnail_url,
        title,
          author
          } = data || {};
          const date = new Date(author.published_date);
          const formattedDate = date.toLocaleDateString("en-US",{
            year:"numeric",
            month:"short",
            day:"numeric"
          })
          return (
            // <div
            //   key={data._id}
            //   className="card card-compact  bg-base-100 shadow-xl"
            // >
            //   <figure>
            //     <img className='h-[150px]  object-cover ' src={thumbnail_url} alt={title} />
            //   </figure>
            //   <div className="card-body">
            //     <h2 className="card-title">{title}</h2>
            //     <p>If a dog chews shoes whose shoes does he choose?</p>
            //     <div>
            //       {/* {categories.map((category) => (
            //         <p key={category.id}>{category.name}</p>
            //       ))} */}
            //       <div className='flex items-center'>
            //         <CiCalendar />
            //         <p>{formattedDate}</p>
            //       </div>
            //     </div>
            //   </div>
            // </div>
            <Card key={data._id} className="">
              <CardHeader floated={false} className="h-52 object-cover shadow-none">
                <img className="mx-auto" src={thumbnail_url} alt="" />
              </CardHeader>
              <CardBody className="text-center">
                <Typography variant="h4" color="blue-gray" className="mb-2">
                  {title}
                </Typography>

                  <div className="flex items-center gap-2">
                     <CiCalendar/>
                    <p>{formattedDate}</p>

                  </div>
              </CardBody>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

LeftSideNav.propTypes = {}

export default LeftSideNav