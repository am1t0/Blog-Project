import { createContext, useReducer,useEffect,useState } from "react";

export const BlogStore = createContext({
    blogList : [],
    addBlog : ()=>{},
    removeBlog : ()=>{},
    fetching : false,
})

const reducer = (currBlogList,action)=>{
    let newBlogList = currBlogList;

    if(action.type==='ADD_BLOG'){
       newBlogList = [action.payload,...currBlogList];
    }
    else if(action.type==='DELETE_POST'){
       newBlogList = currBlogList.filter((blog)=> {return blog.title!==action.payload.title})
    }
    else if(action.type==='ADD_INITIAL_BLOG'){
       newBlogList = action.payload
    }
   return newBlogList;
}
export const BlogStoreProvider =({children})=>{

    const [blogList,dispatchBlogList]  = useReducer(reducer,[]);
   
    const addInitialBlog=(blogs)=>{
        dispatchBlogList({ type: 'ADD_INITIAL_BLOG', payload: blogs })
    }

    const addBlog=(blog)=>{
        dispatchBlogList({
            type:'ADD_BLOG',
            payload:blog,
        })
    }
    
    const removeBlog=(title)=>{
       dispatchBlogList({
        type:'DELETE_POST',
        payload:{
            title
        }
       })
    } 
    const [fetching,setFetching] = useState(false);
    useEffect(() =>{
        setFetching(true);
        fetch('https://dummyjson.com/posts')
        .then(res => res.json())
        .then((res) => {
        const blogs = res.posts;
        addInitialBlog(blogs);
        setFetching(false);
          });          
          },[])

    return (
       <BlogStore.Provider value={{
         blogList,
         addBlog,
         removeBlog,
         fetching,
       }}>
          {children}
       </BlogStore.Provider>
    )
}