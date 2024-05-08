import * as React from 'react';
import { Link } from 'react-router-dom';
import { useState , useEffect} from 'react'; // Import useState hook
import logo from '../assets/eStorelogo1.1.png'
import title from '../assets/eStore (1).png'

import './navbar.css';

function Nav() {
  const [isCollapsed, setIsCollapsed] = useState(true); // State to track collapse
  const [isCollapsed2, setIsCollapsed2] = useState(true); // State to track collapse

  const imge = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png';
  // const logo =`../assets/eStorelogo.png`;
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed); // Toggle the collapse state
  };
  const toggleCollapse2 = () => {
    setIsCollapsed2(!isCollapsed2); // Toggle the collapse state
  };
  ///////////////////////////////////////////////
  const api_url = "https://fakestoreapi.com/products";
  const [category, setCategoy] = useState([]);
  const getCategories=()=>{
    fetch(`${api_url}/categories`)
    .then((res)=>res.json())
    .then((data)=>setCategoy(data))
}
useEffect(()=>{
  getCategories();
},[])

  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to='/about'>
            <img src={logo} alt="Logo" width="50" height="50" className="d-inline-block align-text-top" />
            {/* Bootstrap */}
            </Link >
            <Link className="navbar-brand" to='/'>
            <img src={title} alt="Logo" width="300" height="50" className="d-inline-block align-text-top" />
          </Link>
          <button className="navbar-toggler" type="button" onClick={toggleCollapse} aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isCollapsed ? '' : 'show'}`} id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" onClick={toggleCollapse} aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item dropdown" style={{backgroundColor:"#64BC7B",}}>
                <Link className="nav-link dropdown-toggle" to="/" role="button" onClick={toggleCollapse2} aria-expanded={!isCollapsed}>
                 Categories
                </Link>
                <ul className={`dropdown-menu ${isCollapsed2 ? '' : 'show'}`}style={{backgroundColor:"#64BC7B",}}>
                  {
                  category.map((cat,index)=>{
                    let url=`/products/category/${cat}`;
                    return(
                   
                   <React.Fragment key={index}> 
                  <li ><Link className="dropdown-item" to={url} onClick={toggleCollapse}>{cat}</Link></li>
                 </React.Fragment>
                  )})
                  }
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" onClick={toggleCollapse} to="/about">About us</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
