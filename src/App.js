// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, {useState} from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  //Link 
}from "react-router-dom"

function App() {
  const [mode,setMode]=useState('light');
  const[alert,setAlert]=useState(null);

  const showAlert = (message,type) =>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

const removeBodyClasses=(cls)=>{
  document.body.classList.remove('bg-light')
  document.body.classList.remove('bg-dark')
  document.body.classList.remove('bg-warning')
  document.body.classList.remove('bg-danger')
  document.body.classList.remove('bg-success')
}


  const toggleMode =(cls)=>{
    removeBodyClasses();
    if(cls==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor="#042743";
      showAlert("Dark mode is Enabled","success"); 
    }
    if(cls==='dark')
    {
      setMode('light'); 
      document.body.style.backgroundColor="white";
      showAlert("Light mode is Enabled","success")
    }
    console.log(cls);
    document.body.classList.add('bg-'+cls)
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor="#042743";
      showAlert("Dark mode is Enabled","success");
      document.title='TextUtils - Dark Mode';
      // blinking Title 
    //   setInterval(() => {
    //     document.title = 'Install Text Utils Now';
    //   }, 2000);
    //   setInterval(() => {
    //     document.title = 'TextUtil is amazing';
    //   }, 1500);
    }
    else {
      setMode('light'); 
      document.body.style.backgroundColor="white";
      showAlert("Light mode is Enabled","success")
      document.title='TextUtils - Light Mode'
    }
  }

  return (
    <>
    <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container">
      {/* why to use exact path 
      /users ---> component1
      /users/home ------->component2 */} 
       <Switch>
          <Route exact path="/about">
            <About mode={mode} />
          </Route>
          <Route exact path="/">
          <TextForm showAlert={showAlert} heading="Enter the Text to Analyze below" mode={mode}/> 
          </Route>
        </Switch>
        {/* <TextForm showAlert={showAlert} heading="Enter the Text to Analyze below" mode={mode}/>  */}
      </div>
      </Router>
    {/* <About/> */}
</>
  );
}

export default App;
