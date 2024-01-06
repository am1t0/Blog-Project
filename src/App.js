import { useState ,useEffect, useContext} from "react";
import Navbar from "./Components/Navbar";
import Blogs from "./Components/Blogs";
import CreateBlog from "./Components/CreateBlog";
import { BlogStoreProvider,BlogStore } from "./Store/Data";
import { Outlet } from "react-router-dom";

function App() {
    

  return(
    <BlogStoreProvider>
    <Navbar/>
    <Outlet/>
    </BlogStoreProvider>
  )
}

export default App;
