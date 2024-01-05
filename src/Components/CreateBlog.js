import React, { useContext, useRef } from 'react'
import { BlogStore } from '../Store/Data';

export default function CreateBlog() {
    const titleElm = useRef();
    const authorElm = useRef();
    const bodyElm = useRef();
    const tagsElm = useRef();

    const {addBlog} = useContext(BlogStore);

    const handleOnSubmit=(e)=>{
        e.preventDefault();
        console.log('Submit Clicked')
   const title = titleElm.current.value;
   const author = authorElm.current.value;
   const body = bodyElm.current.value;
   const tags = tagsElm.current.value.split(' ');

  fetch('https://dummyjson.com/posts/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    title,
    body ,
    tags,
    userId:69,
  })
})
.then(res => res.json())
.then(res =>  { addBlog(res)});
    }
  return (
    <div className="d-flex justify-content-center">
    <form style={{width:'48%'}} className='my-4'onSubmit={handleOnSubmit}>
    <div className="form-group my-4">
      <label htmlFor="title">Title</label>
      <input type="text" className="form-control" id="title" placeholder="Enter title" ref={titleElm}/>
    </div>
    <div className="form-group my-4">
      <label htmlFor="Author">Author</label>
      <input type="text" className="form-control" id="Author" placeholder="Enter author name" ref={authorElm}/>
    </div>
    <div className="form-group my-4">
      <label htmlFor="Body">Body</label>
      <textarea type="text" rows={10} className="form-control" id="Body" placeholder="Enter body" ref={bodyElm}/>
    </div>
    <div className="form-group">
      <label htmlFor="tags">Tags</label>
      <textarea type="tags" rows={4} className="form-control" id="tags" placeholder="Enter tags" ref={tagsElm}/>
    </div>
    <button type="submit" className="btn btn-primary my-3">Submit</button>
  </form>
  </div>
  )
}
