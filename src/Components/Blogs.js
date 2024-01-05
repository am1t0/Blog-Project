import React, { useContext, useEffect, useState } from 'react'
import { BlogStore } from '../Store/Data'
import Blog from './Blog';
import LoadingSpinner from './LoadingSpinner';

export default function Blogs() {

  const {blogList,fetching} = useContext(BlogStore);




  return (
    <>
    {fetching && <LoadingSpinner/>}
    <div className='d-flex flex-column align-items-center my-4'>
      {!fetching && blogList.length!==0 && blogList.map((blog)=>{
        return <Blog data = {blog}  key={blog.title}/>
      })}
    </div>
    </>
  )
}
