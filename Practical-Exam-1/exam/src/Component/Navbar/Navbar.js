import { Link } from "react-router-dom"
import Logo from "../Asset/Logo.png"

function Navbar() {
  return (
    <div>
      <div className=" bg-gradient-to-r from-purple-300 via-blue-300 to-yellow-300 flex font-bold justify-between items-center text-white p-5 m-auto rounded-md">
        <img src={Logo} alt=""/>
        <ul className="flex gap-10 items-center">
            <li> <Link to="/"> Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/login">
                <button className="bg-rose-500 rounded-lg ps-3 pe-3 pb-2 pt-1">Login</button>
              </Link>
            </li>
            <li><Link to="/register">
                <button className="bg-sky-500 rounded-lg ps-3 pe-3 pb-2 pt-1">Register</button>
              </Link>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
