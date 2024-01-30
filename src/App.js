import logo from './logo.svg';
import './App.css';
import PlayersList from './PlayersList'

function App() {
  return (
    <div style={{ textAlign:"center"   , width: "90%" , height: "90%" }}>
      <h1> Worlshop Props </h1>
      <div className="App" style={{display:'flex' }} >
         <PlayersList />
      </div>
    </div>
  );
}

export default App;

