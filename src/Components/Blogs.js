import React, { useContext } from 'react'
import { BlogStore } from '../Store/Data'
import Blog from './Blog';

export default function Blogs() {

  const {blogList} = useContext(BlogStore);
  return (
    <div className='d-flex flex-column align-items-center my-4'>
      {blogList.length!==0 && blogList.map((blog)=>{
        return <Blog data = {blog} />
      })}
    </div>
  )
}
