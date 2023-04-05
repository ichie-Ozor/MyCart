import React from 'react'
import { Link, useLocation } from 'react-router-dom';

function Nav() {
  const location = useLocation()
  const navLinks = [
    {
      path: "/",
      name: "Home",
      styl:'home'
    },
    {
      path: "/cart",
      name: "Cart",
      styl : 'cart-icon'
    },
  ];

const renderNav = navLinks.map((val, index) => {
  return (
    <Link to={val.path} key={index} style={{color:location.pathname === val.path ? 'red' : 'black'}} className={val.styl}>
      {val.name}
    </Link>
  )
})

  return (
    <div className="nav">
       {renderNav}
    </div>
      // <div className="nav">
      //   <Link to={'/'} className="home">Home</Link>
      //   <Link to={'/cart'} className="cart-icon">Cart</Link>
      // </div>
  );
}

export default Nav