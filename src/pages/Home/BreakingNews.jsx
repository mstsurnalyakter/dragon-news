import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';



const BreakingNews = () => {
  const [newsData,setNewsData] = useState([])
  useEffect(()=>{
    fetch("news.json")
    .then(res=>res.json())
    .then(data=>setNewsData(data))
    .catch(error=>{
      console.error(error)
    })
  },[])
  console.log(newsData);
  return (
    <div className="flex items-center  p-4 bg-[#F3F3F3] mb-8">
      <button className="btn bg-[#D72050] hover:bg-[#f3124e] text-white">
        Latest
      </button>
      <Marquee pauseOnHover={true} speed={100}>
        {newsData.map((data) => (
          <Link className="mr-10 text-[#403F3F]" to={`/news/${data._id}`} key={data._id}>
            {data.title}
          </Link>
        ))}
      </Marquee>
    </div>
  );
}

BreakingNews.propTypes = {}

export default BreakingNews