import { Link } from "react-router-dom"
import Logo from "../Asset/Logo.png"

function Navbar() {
  return (
    <div>
      <div className="w-[900px] bg-gradient-to-r from-purple-500 to-pink-500 flex font-bold justify-between items-center text-white p-5 m-auto rounded-md">
        <img src={Logo} alt=""/>
        <ul className="flex gap-10">
            <li> <Link to="/"> Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/help">Help</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
