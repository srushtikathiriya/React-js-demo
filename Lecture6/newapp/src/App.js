import logo from './logo.svg';
import './App.css';
import Cardprops from "./Props/Cardprops"
import Img1 from "./Props/Asset/Image-1.jpg"
import Img2 from "./Props/Asset/Image-2.jpg"
import Img3 from "./Props/Asset/Image-3.jpg"
import Img4 from "./Props/Asset/Image-4.jpg"
import Img5 from "./Props/Asset/Image-5.jpg"
import Img6 from "./Props/Asset/Image-6.jpg"
import Greeting from './Props/Greeting';

function App() {
  return (
    <div className="App">
      <Greeting/>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Cardprops name="Keiji akira" course="Full Stack Developer" descr="The lorem text the section contain contains header having open andclose functionality." img={Img1} button="View More" />
        <Cardprops name="Cid Sirius" course="Mern Stack Developer" descr="The lorem text the section contain contains header having open andclose functionality." img={Img4} button="View More" />
        <Cardprops name="Rubber Soul" course="UI - UX" descr="The lorem text the section contain contains header having open andclose functionality." img={Img3} button="View More" />
      </div>

      <div style={{ display: "flex", justifyContent: "space-evenly", padding: "30px" }}>
        <Cardprops name="Enrico Pucci" course="Fronted Developer" descr="The lorem text the section contain contains header having open andclose functionality." img={Img6} button="View More" />
        <Cardprops name="Leone Abbacchio" course="Backend Developer" descr="The lorem text the section contain contains header having open andclose functionality." img={Img2} button="View More" />
        <Cardprops name="David Dell" course="Web Designer" descr="The lorem text the section contain contains header having open andclose functionality." img={Img5} button="View More" />
      </div>

           </div> 
  );
}

export default App;
