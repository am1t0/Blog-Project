import { useContext } from "react";
import { Form, redirect } from "react-router-dom";
import { BlogStore } from "../Store/Data";

export default function CreateBlog() {

  const {darkMode} = useContext(BlogStore)

  return (
    <div className="d-flex justify-content-center" style={{background:''}}>
    <Form method='POST' style={{width:'48%' ,background:`${darkMode?'grey':'skyBlue'}`}} className='my-4 p-4'>
    <div className="form-group my-4">
      <label htmlFor="title">Title</label>
      <input type="text" className="form-control" id="title" placeholder="Enter title" name='title'/>
    </div>
    <div className="form-group my-4">
      <label htmlFor="Author">Author</label>
      <input type="text" className="form-control" id="Author" placeholder="Enter author name" name='author'/>
    </div>
    <div className="form-group my-4">
      <label htmlFor="Body">Body</label>
      <textarea type="text" rows={10} className="form-control" id="Body" placeholder="Enter body"name="body"/>
    </div>
    <div className="form-group">
      <label htmlFor="tags">Tags</label>
      <textarea type="tags" rows={4} className="form-control" id="tags" placeholder="Enter tags" name="tags"/>
    </div>
    <button type="submit" className="btn btn-primary my-3">Submit</button>
  </Form>
  </div>
  )
}

export const createBlogAction = async (data)=>{
 
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(' ');
  console.log(postData);

  fetch('https://dummyjson.com/posts/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(res => console.log(res));

  return redirect('/');
}