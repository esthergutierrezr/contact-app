import logo from './logo.svg';
import './App.css';
import Contact from "./components/Contact";

function App() {
  return (
    <div>
    <Contact 
    avatar= "https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png"
    name="Bart Sutton"
    status = {true}
    />
      
    </div>
  );
}

export default App;
