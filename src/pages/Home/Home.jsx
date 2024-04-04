// import React from 'react'
import Header from '../Shared/Header/Header';
import NavBar from '../Shared/NavBar/NavBar';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../Shared/RightSideNav/RightSideNav';
import BreakingNews from './BreakingNews';
import useNewsData from '../../hooks/useNewsData';
import { Link } from 'react-router-dom';
import { Rating } from "@material-tailwind/react";
import { FaRegEye } from "react-icons/fa";
import { CiBookmark, CiShare2 } from 'react-icons/ci';
// import { CiShare2 } from "react-icons/ci";


const Home = () => {
  const  {newsData,loading} = useNewsData();
  return (
    <div>

      <Header />
     <BreakingNews/>
      <NavBar />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="">
          <LeftSideNav />
        </div>
        {/* middle */}
        <div className="lg:col-span-2  space-y-6">
             {
              newsData.map(news=>{
                const { thumbnail_url, details,author, rating, title,total_view } = news;
                 const date = new Date(author.published_date);
                 const formattedDate = date.toLocaleDateString("en-US", {
                   year: "numeric",
                   month: "numeric",
                   day: "numeric",
                 });

                return (
                  <section
                    key={news._id}
                    className="border-2 p-5 border-[#E7E7E7]"
                  >
                    <Link className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 space-y-6">
                      <div className="flex justify-between items-center bg-[#F3F3F3] p-5">
                        <div className="flex items-center gap-3">
                          <img
                            className="w-10 rounded-full"
                            src={author.img}
                            alt=""
                          />
                          <div>
                            <h3>{author.name}</h3>
                            <span className="text-xs dark:text-gray-600">
                              {formattedDate}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <CiBookmark />
                          <CiShare2 />
                        </div>
                      </div>
                      <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                        {title}
                      </h3>
                      <figure className="object-cover w-full  rounded h-64">
                        <img
                          role="presentation"
                          className="w-full h-full"
                          src={thumbnail_url}
                        />
                      </figure>
                      <div className="p-6 space-y-2">
                        <p>{details.slice(0, 200)}...</p>
                        <Link className="bg-gradient-to-r from-orange-500 to-pink-500   text-transparent bg-clip-text">
                          Read More
                        </Link>
                        <div className="border-b-2 "></div>
                        <div className="flex justify-between">
                          <div className="flex items-center gap-2">
                            <Rating value={5} />
                            <span>{rating.number}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <FaRegEye />
                            <p>{total_view}</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                    {/* <a
                        rel="noopener noreferrer"
                        href="#"
                        className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50"
                      >
                        <img
                          src="https://source.unsplash.com/random/480x360"
                          alt=""
                          className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
                        />
                        <div className="p-6 space-y-2 lg:col-span-5">
                          <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
                            Noster tincidunt reprimique ad pro
                          </h3>
                          <span className="text-xs dark:text-gray-600">
                            February 19, 2021
                          </span>
                          <p>
                            Ei delenit sensibus liberavisse pri. Quod suscipit
                            no nam. Est in graece fuisset, eos affert putent
                            doctus id.
                          </p>
                        </div>
                      </a> */}
                    {/* <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        <a
                          rel="noopener noreferrer"
                          href="#"
                          className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50"
                        >
                          <img
                            role="presentation"
                            className="object-cover w-full rounded h-44 dark:bg-gray-500"
                            src="https://source.unsplash.com/random/480x360?1"
                          />
                          <div className="p-6 space-y-2">
                            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                              In usu laoreet repudiare legendos
                            </h3>
                            <span className="text-xs dark:text-gray-600">
                              January 21, 2021
                            </span>
                            <p>
                              Mei ex aliquid eleifend forensibus, quo ad dicta
                              apeirian neglegentur, ex has tantas percipit
                              perfecto. At per tempor albucius perfecto, ei
                              probatus consulatu patrioque mea, ei vocent
                              delicata indoctum pri.
                            </p>
                          </div>
                        </a>
                        <a
                          rel="noopener noreferrer"
                          href="#"
                          className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50"
                        >
                          <img
                            role="presentation"
                            className="object-cover w-full rounded h-44 dark:bg-gray-500"
                            src="https://source.unsplash.com/random/480x360?2"
                          />
                          <div className="p-6 space-y-2">
                            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                              In usu laoreet repudiare legendos
                            </h3>
                            <span className="text-xs dark:text-gray-600">
                              January 22, 2021
                            </span>
                            <p>
                              Mei ex aliquid eleifend forensibus, quo ad dicta
                              apeirian neglegentur, ex has tantas percipit
                              perfecto. At per tempor albucius perfecto, ei
                              probatus consulatu patrioque mea, ei vocent
                              delicata indoctum pri.
                            </p>
                          </div>
                        </a>
                        <a
                          rel="noopener noreferrer"
                          href="#"
                          className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50"
                        >
                          <img
                            role="presentation"
                            className="object-cover w-full rounded h-44 dark:bg-gray-500"
                            src="https://source.unsplash.com/random/480x360?3"
                          />
                          <div className="p-6 space-y-2">
                            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                              In usu laoreet repudiare legendos
                            </h3>
                            <span className="text-xs dark:text-gray-600">
                              January 23, 2021
                            </span>
                            <p>
                              Mei ex aliquid eleifend forensibus, quo ad dicta
                              apeirian neglegentur, ex has tantas percipit
                              perfecto. At per tempor albucius perfecto, ei
                              probatus consulatu patrioque mea, ei vocent
                              delicata indoctum pri.
                            </p>
                          </div>
                        </a>
                        <a
                          rel="noopener noreferrer"
                          href="#"
                          className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block"
                        >
                          <img
                            role="presentation"
                            className="object-cover w-full rounded h-44 dark:bg-gray-500"
                            src="https://source.unsplash.com/random/480x360?4"
                          />
                          <div className="p-6 space-y-2">
                            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                              In usu laoreet repudiare legendos
                            </h3>
                            <span className="text-xs dark:text-gray-600">
                              January 24, 2021
                            </span>
                            <p>
                              Mei ex aliquid eleifend forensibus, quo ad dicta
                              apeirian neglegentur, ex has tantas percipit
                              perfecto. At per tempor albucius perfecto, ei
                              probatus consulatu patrioque mea, ei vocent
                              delicata indoctum pri.
                            </p>
                          </div>
                        </a>
                        <a
                          rel="noopener noreferrer"
                          href="#"
                          className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block"
                        >
                          <img
                            role="presentation"
                            className="object-cover w-full rounded h-44 dark:bg-gray-500"
                            src="https://source.unsplash.com/random/480x360?5"
                          />
                          <div className="p-6 space-y-2">
                            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                              In usu laoreet repudiare legendos
                            </h3>
                            <span className="text-xs dark:text-gray-600">
                              January 25, 2021
                            </span>
                            <p>
                              Mei ex aliquid eleifend forensibus, quo ad dicta
                              apeirian neglegentur, ex has tantas percipit
                              perfecto. At per tempor albucius perfecto, ei
                              probatus consulatu patrioque mea, ei vocent
                              delicata indoctum pri.
                            </p>
                          </div>
                        </a>
                        <a
                          rel="noopener noreferrer"
                          href="#"
                          className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block"
                        >
                          <img
                            role="presentation"
                            className="object-cover w-full rounded h-44 dark:bg-gray-500"
                            src="https://source.unsplash.com/random/480x360?6"
                          />
                          <div className="p-6 space-y-2">
                            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                              In usu laoreet repudiare legendos
                            </h3>
                            <span className="text-xs dark:text-gray-600">
                              January 26, 2021
                            </span>
                            <p>
                              Mei ex aliquid eleifend forensibus, quo ad dicta
                              apeirian neglegentur, ex has tantas percipit
                              perfecto. At per tempor albucius perfecto, ei
                              probatus consulatu patrioque mea, ei vocent
                              delicata indoctum pri.
                            </p>
                          </div>
                        </a>
                      </div>
                      <div className="flex justify-center">
                        <button
                          type="button"
                          className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-50 dark:text-gray-600"
                        >
                          Load more posts...
                        </button>
                      </div> */}
                    {/* </div> */}
                  </section>
                );
              })
             }
        </div>
        {/* middle */}
        <div className="">
          <RightSideNav />
        </div>
      </div>
    </div>
  );
}

export default Home