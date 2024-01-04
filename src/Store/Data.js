import { createContext, useReducer } from "react";

export const BlogStore = createContext({
    blogList : [],
    addBlog : ()=>{},
    removeBlog : ()=>{}
})

const reducer = (currBlogList,action)=>{
    let newBlogList = currBlogList;

    if(action.type==='ADD_BLOG'){
       newBlogList = [...currBlogList,action.payload];
    }
    else if(action.type==='DELETE_POST'){
       newBlogList = currBlogList.filter((blog)=> {return blog.title!==action.payload.title})
    }
   return newBlogList;
}
export const BlogStoreProvider =({children})=>{

    const [blogList,dispatchBlogList]  = useReducer(reducer,[]);

    const addBlog=(title,author,body,tags)=>{
        dispatchBlogList({
            type:'ADD_BLOG',
            payload:{
                title:title,
                author:author,
                date:new Date().toLocaleDateString(),
                body:body,
                tags:tags
            }
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
       }}>
          {children}
       </BlogStore.Provider>
    )
}