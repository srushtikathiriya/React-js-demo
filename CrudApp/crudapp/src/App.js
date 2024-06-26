import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Home from './Component/Home/Home';
import Create from './Component/Create/Create';
import Edit from './Component/Edit/Edit';
import Login from './Component/Login/Login';
import Register from './Component/Register/Register';
import Error from "./Component/Error/Error"
import Navbar from './Component/Navbar/Navbar'
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';

function App() {
  return (
    <div className="App">
                <BrowserRouter>
                <Navbar/>
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/create" element={<Create/>} />
          <Route path="/edit/:id" element={<Edit/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/" element={<Register/>} />
          <Route path="*" element={<Error/>} />
        </Routes>
        </BrowserRouter>
    
    </div>
  );
}

export default App;
