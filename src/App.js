import { useState ,useEffect, useContext} from "react";
import Navbar from "./Components/Navbar";
import Blogs from "./Components/Blogs";
import CreateBlog from "./Components/CreateBlog";
import { BlogStoreProvider,BlogStore } from "./Store/Data";

function App() {
    
  const [selectedTab,setSelectedTab] = useState('Home');

  return(
    <BlogStoreProvider>
    <Navbar tab ={selectedTab} setTab ={setSelectedTab} />

    {(selectedTab==='Home')?<Blogs/> : <CreateBlog/>}
    </BlogStoreProvider>
  )
}

export default App;
