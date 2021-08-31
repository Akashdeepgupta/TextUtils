import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <Navbar title="Blog" aboutText="abt text"/>
    <div className="container">
    <TextForm heading="Enter the Text to Analyze below"/> 
    </div>
</>
  );
}

export default App;
