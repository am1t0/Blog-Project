import { useContext } from 'react';
import Blog from './Blog';
import { useLoaderData } from 'react-router-dom';
import { BlogStore } from '../Store/Data';

export default function Blogs() {

  const blogList = useLoaderData();
  const {darkMode} = useContext(BlogStore)

  return (
    <>
    <div className='d-flex flex-column align-items-center my-4' id='blogListLight'>
      {blogList.length!==0 && blogList.map((blog)=>{
        return <Blog data = {blog}  key={blog.title}/>
      })}
    </div>
    </>
  )
}

export const loadingBlogs=()=>{
    return fetch('https://dummyjson.com/posts')
    .then(res => res.json())
    .then((res) => {
      console.log('Fetched data is : ',res.posts)
      return res.posts;
      });          

}