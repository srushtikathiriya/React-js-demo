// import logo from './logo.svg';
// import './App.css';
import Nav from "./Component/Nav/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import Navbar2 from "./Component/Navbar2/Navbar2";
import Header from "./Component/Header/Header";
import Fpart from "./Component/First-Part/Fpart";
import Spart from "./Component/Second-part/Secpart";
import Thirdpart from "./Component/Thirdsec/Thirdpart";
import Lastpart from "./Component/LastPart/Lastpart";
import Footer from './Component/Footer/Footer';
import Home from "./Pages/Home/Home";
import Shop from "./Pages/Shop/Shop/Shop";
import Page from "./Pages/page/Pages/Page";
import Contact from "./Pages/Contact/Contact";
import Blog from "./Pages/Blog/Blog/Blog";
import Error from "./Pages/Error/Error"
import Shop2 from "./Pages/Shop/Shop2/Shop2";
import Checkout from "./Pages/page/Checkout/Checkout"
import Blogdetails from "./Pages/Blog/Blogdetails/Blogdetails"
import Producttract from "./Pages/page/Producttract/Producttract";
import Wishlist from "./Pages/page/Wishlist/Wishlist";
import Comingsoon from "./Pages/page/Comingsoon/Comingsoon"
import About from "./Pages/page/About/About";
import Cart from "./Pages/page/Cart/Cart";
import Signin from "./Pages/page/Signin/Signin";
import Login from "./Pages/page/Login/Login";
import Woodenhome from "./Pages/Home/Woodenhome/Woodenhome";
import Shoplocation from "./Pages/Shop/Shoplocation/Shoplocation";
import Carticon from "./Component/Carticon/Carticon";


function App() {
  return (    
    <div className="App">

      <BrowserRouter>
        <Nav />
        <Navbar />
        <Navbar2 />
        <Routes>
        {/* <Route path="/carticon" element={<Carticon/>} /> */}


          <Route path="/" element={<Home/>} />
          <Route path="/" element={<Woodenhome/>} />

          <Route path="/shop" element={<Shop/>}/>
          <Route path="/shop2" element={<Shop2/>}/>
          <Route path="/shoplocation" element={<Shoplocation/>}/>

          <Route path="/pages" element={<Page/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/signin" element={<Signin/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/producttract" element={<Producttract/>} />
          <Route path="/wishlist" element={<Wishlist/>} />
          <Route path="/comingsoon" element={<Comingsoon/>} />

          <Route path="/blog" element={<Blog/>} /> 
          <Route path="/blogdetail" element={<Blogdetails/>} /> 

          <Route path="/contact" element={<Contact/>} />

          <Route path="*" element={<Error/>}/>
        </Routes>
      <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
