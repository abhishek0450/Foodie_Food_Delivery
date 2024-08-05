import './Header.css'
import mainLOGO from "../assets/Foodcropped.svg"


const Header = () => {
  return (
    <div className='header-main'>
    <img className="logo" src={mainLOGO} />
    <ul className='ul-list'>
      <li>Home</li>
      <li>About Us</li>
      <li>Contact Us</li>
      <li>Cart</li>
    </ul>
    </div>
  )
}

export default Header