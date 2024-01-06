import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import CreateBlog, { createBlogAction } from './Components/CreateBlog';
import Blogs from './Components/Blogs';
import { loadingBlogs } from './Components/Blogs';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
 {path:'/',element: <App/> ,children:[
   {path:'/',element: <Blogs/> ,loader: loadingBlogs},
   {path:'/create-blog',element: <CreateBlog/> , action: createBlogAction}
 ]},
])
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
    <App />
    </RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
