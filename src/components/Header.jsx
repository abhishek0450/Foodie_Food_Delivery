import './Header.css'
import mainLOGO from "../assets/Foodcropped.svg"
// import { useState } from 'react'



// const Header = () => {
  
//   const [loginButton , setLoginButton] = useState("Login");
//   return (
//     <div className='header-main'>
//     <img className="logo" src={mainLOGO} />
//     <h1 className='main-name'>GreatFoods</h1>
//     <ul className='ul-list'>
//       <li>Home</li>
//       <li>About Us</li>
//       <li>Contact Us</li>
//       <li>Cart</li>
//       <button className='loginButton' onClick={()=>{loginButton === "Login" ? setLoginButton("Logout") : setLoginButton("Login")}}>{loginButton}</button>
//     </ul>
//     </div>
//   )
// }

// export default Header



import { useState, useEffect } from 'react';

const Header = () => {
  const [loginButton, setLoginButton] = useState("Login");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Close sidebar when clicking anywhere outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarOpen && !document.querySelector('.sidebar').contains(event.target) && !document.querySelector('.hamburger').contains(event.target)) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [sidebarOpen]);

  return (
    <div className='header-main'>
      <img className="logo" src={mainLOGO} alt="Logo" />
      <h1 className='main-name'>GreatFoods</h1>

      {/* Hamburger icon for mobile */}
      <div className="hamburger" onClick={() => setSidebarOpen(!sidebarOpen)}>
        &#9776;
      </div>

      {/* Main Navigation */}
      <ul className='ul-list'>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
        <button className='loginButton' onClick={() => { loginButton === "Login" ? setLoginButton("Logout") : setLoginButton("Login") }}>
          {loginButton}
        </button>
      </ul>

      {/* Sidebar for mobile view */}
      {sidebarOpen && (
        <div className="sidebar">
          <button className="close-btn" onClick={() => setSidebarOpen(false)}>Back</button> {/* Back button */}
          <ul>
            <li onClick={() => setSidebarOpen(false)}>Home</li>
            <li onClick={() => setSidebarOpen(false)}>About Us</li>
            <li onClick={() => setSidebarOpen(false)}>Contact Us</li>
            <li onClick={() => setSidebarOpen(false)}>Cart</li>
            <button className='loginButton' onClick={() => { 
              loginButton === "Login" ? setLoginButton("Logout") : setLoginButton("Login");
              setSidebarOpen(false); /* Close sidebar after login button click */
            }}>
              {loginButton}
            </button>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Header;

