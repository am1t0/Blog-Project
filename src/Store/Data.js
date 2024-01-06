import { createContext, useReducer,useState } from "react";

export const BlogStore = createContext({
    blogList : [],
    addBlog : ()=>{},
    removeBlog : ()=>{},
    fetching : false,
    darkMode: false,
    changeMode: ()=>{},
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
    const [fetching,setFetching] = useState(false);
   const [darkMode,setDarkMode] = useState(false);

    const changeMode =()=>{
       //console.log('Dark Mode ', darkMode)
            setDarkMode(!darkMode);
        console.log('Dark Mode ', darkMode)
    }

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

    return (
       <BlogStore.Provider value={{
         blogList,
         addBlog,
         removeBlog,
         fetching,
         darkMode,
         changeMode
       }}>
          {children}
       </BlogStore.Provider>
    )
}