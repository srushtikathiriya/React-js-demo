// import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./Component/Home/Home";
import About from "./Component/About/About";
import Contact from "./Component/Contact/Contact";
import Login from "./Component/Login/Login";
import Navbar from "./Component/Navbar/Navbar"
import Register from './Component/Register/Register';
// import Card from "./Component/Card/Card"


function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Navbar/>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/Login" element={<Login/>}/>
              <Route path="/register" element={<Register/>}/>
            </Routes>
      </BrowserRouter>
      

    </div>
  );
}

export default App;
