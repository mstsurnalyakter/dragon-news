import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import {  NavLink } from 'react-router-dom'

const LeftSideNav = () => {
  const [categories,setCategories] = useState([])
  useEffect(()=>{
    fetch("categories.json")
    .then(res=>res.json())
    .then(data=>setCategories(data))
    .catch(error =>console.error(error))
  },[])
  console.log(categories);
  return (
    <div>
      <h2>All Categories</h2>
      <div className='space-y-5'>
        {
          categories.map(category=><NavLink to={`/category/${category.id}`} className='block ml-4 text-xl font-semibold m' key={category.id}>{category.name}</NavLink>)
        }
      </div>
    </div>
  )
}

LeftSideNav.propTypes = {}

export default LeftSideNav