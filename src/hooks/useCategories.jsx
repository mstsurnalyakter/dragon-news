import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const useCategories = () => {
    const [categories, setCategories] = useState([]);
   const [loading, setLoading] = useState(false);
   useEffect(() => {
     const fetchCategories = async () => {
       try {
         setLoading(true);
         const res = await fetch("categories.json");
         if (!res.ok) {
           throw new Error("Fail to categories data fetch.");
         }
         const data = await res.json();
         setCategories(data);
         setLoading(false);
       } catch (error) {
         console.error(error);
       }
     };
     fetchCategories();
   }, []);
   return { categories, loading };
}

useCategories.propTypes = {}

export default useCategories