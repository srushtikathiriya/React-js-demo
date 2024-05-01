// import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./Use-Router/Home/Home";
import About from "./Use-Router/About/About";
import Blog from "./Use-Router/Blog/Blog";
import Contact from "./Use-Router/Contact/Contact";
import Help from "./Use-Router/Help/Help";
import Navbar from "./Use-Router/Navbar/Navbar"
import Error from './Use-Router/Error/Error';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Navbar/>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/blog" element={<Blog/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/help" element={<Help/>}/>
              <Route path="*" element={<Error/>}/>
            </Routes>
      </BrowserRouter>
      

    </div>
  );
}

export default App;
