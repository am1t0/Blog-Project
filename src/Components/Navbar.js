import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { BlogStore } from '../Store/Data';

export default function Navbar() {
  const {changeMode,darkMode} = useContext(BlogStore);

  const toggleMode =()=>{
    changeMode();
  }
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${darkMode?'dark':'light'} bg-${darkMode?'dark':'light'} py-2`}>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample10" aria-controls="navbarsExample10" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample10">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/create-blog">Create Blog</Link>
            </li>
          </ul>
        </div>
        <div className="d-flex">
          <span>{darkMode?'Off Dark-Mode':'On Dark-Mode'}</span>
        <div className="form-check form-switch"  onClick={toggleMode}>
    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
    </div>
        </div>
      </nav>
      </>
  )
}
