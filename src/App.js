import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet'
import Welcome from './Components/Welcome'
import Hello from './Components/Hello'

function App() {
  return (
    <div className="App">
        {/*<Greet></Greet>*/}
        {/*<Welcome></Welcome>*/}
        {/*<Hello></Hello>*/}
        <Greet name = "Bruce" heroName = "Gizmo"></Greet>
        <Greet name = "Clark" heroName = "Superman"></Greet>
        <Greet name = "Diana" heroName = "Wonder Woman"></Greet>

    </div>
  );
}

export default App;
