import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const useNewsData = () => {
       const [newsData, setNewsData] = useState([]);
     const [loading, setLoading] = useState(false);
     useEffect(()=>{
       const fetchNewsData = async () =>{
         try {
            setLoading(true);
            const res = await fetch("/news.json");
            if (!res.ok) {
                throw new Error("Fail to news data fetch.")
            }
            const data = await res.json();
            setNewsData(data);
            setLoading(false)
        } catch (error) {
          console.error(error)
        }
       }
       fetchNewsData();
     },[])
  return {newsData,loading}
}

useNewsData.propTypes = {}

export default useNewsData