import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/Textform';

function App() {
  return (
    <div>
    <Navbar title="Textutils"/>
    <div className="container">
    <TextForm heading="Enter your text to analyze below"></TextForm>
    </div>
    </div>
  );
}

export default App;
