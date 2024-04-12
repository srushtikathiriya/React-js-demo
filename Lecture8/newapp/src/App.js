import logo from './logo.svg';
import './App.css';
import Emoji from "./component/Emoji"

function App(){
  return (
    <div className="App">
      <div style={{display:"flex",justifyContent:"center",alignItems:"center",background:"linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%)",height:"550px",color:"burlywood",fontSize:"50px",fontWeight:"bold"}}>
        <Emoji emoji1 = "😁" emoji2 = "😅" emoji3 = "😄"/>
      </div>
    </div>
  );
}

export default App;
