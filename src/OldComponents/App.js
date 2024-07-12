import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet'
import Welcome from './Components/Welcome'
import Hello from './Components/Hello'
import Message from "./Components/Message";
import Counter from "./Components/Counter"
import Goodbye from "./Components/Goodbye"
import FunctionClick from "./Components/FunctionClick";
import ClassClick from "./Components/ClassClick";
import ClassroomClick from "./Components/ClassroomClick"
import EventBind from "./Components/EventBind"

function App() {
  return (
    <div className="App">
        {/*<Greet></Greet>*/}
        {/*<Welcome></Welcome>*/}
        {/*<Hello></Hello>*/}
        {/*<Greet name = "Bruce" heroName = "Gizmo">
            <p>This is children props</p>
        </Greet>
        <Greet name = "Clark" heroName = "Superman">
            <button>Action</button>
        </Greet>
        <Greet name = "Diana" heroName = "Wonder Woman"></Greet>

        <Welcome name = "Bruce" heroName = "Gizmo">
            <p>Banning</p>
        </Welcome>
        <Welcome name = "Clark" heroName = "Superman">
            <p>!!!!!!!</p>
        </Welcome>
        <Welcome name = "Diana" heroName = "Wonder Woman"></Welcome>
        */}
        {/*<Message>
            <button>Click</button>
        </Message>*/}
        {/*<Counter/>*/}
        {/*<Goodbye name = "Twomad"></Goodbye>*/}
        {/*<FunctionClick></FunctionClick>*/}
        {/*<ClassClick></ClassClick>*/}
        {/*<ClassroomClick></ClassroomClick>*/}
        <EventBind></EventBind>
    </div>
  );
}

export default App;
