import PropTypes from 'prop-types'
import { Rating } from '@material-tailwind/react';
import { FaRegEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { CiBookmark, CiShare2 } from "react-icons/ci";
const NewsCard = ({news}) => {
      const { thumbnail_url, details, author, rating, title,_id, total_view } =
        news || {};
      const date = new Date(author.published_date);
      const formattedDate = date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
      });
  return (
    <div className="lg:col-span-2  space-y-6">
      <section className="border-2 p-5 border-[#E7E7E7]">
        <Link className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 space-y-6">
          <div className="flex justify-between items-center bg-[#F3F3F3] p-5">
            <div className="flex items-center gap-3">
              <img className="w-10 rounded-full" src={author.img} alt="" />
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
            {details.length > 200 ? (
              <p>
                {details.slice(0, 200)}{" "}
                <Link to={`/news/${_id}`} className="bg-gradient-to-r from-orange-500 to-pink-500   text-transparent bg-clip-text">
                  Read More....
                </Link>
              </p>
            ) : (
              <p>{details}</p>
            )}

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
      </section>
    </div>
  );
}

NewsCard.propTypes = {
    news:PropTypes.object.isRequired
}

export default NewsCard