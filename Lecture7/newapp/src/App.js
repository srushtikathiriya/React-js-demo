import logo from './logo.svg';
import './App.css';
import Cardprops from './PropsDestr/Cardprops';
import Data from "./PropsDestr/Data"

function App() {
  return (
    <div className="App">
{/* Props using Destructuring */}

       <div style={{ display: "flex", justifyContent: "space-evenly", flexWrap: "wrap", padding: "30px" }}>
        {Data.map((cvalue, ind, arr) => {
          // console.log(cvalue, "cvalue");
          return <Cardprops key={ind} name={cvalue.name} course={cvalue.course} descr={cvalue.descr} img={cvalue.img} button={cvalue.button} />
        })}
      </div>
    </div>
  );
}

export default App;
