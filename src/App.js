import './App.css';
import Navbar from './components/Navbar';
import FormText from './components/FormText';
import Alert from './components/Alert';
// import About from './components/About';
import React,{useState} from 'react'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";


function App() {
  const[modeFontcolor,setModeFontcolor]= useState('text-dark');
  const[mode,setMode]= useState('light');
  const[alert,setAlert] = useState(null);
  
  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null)
    },1000)
  }
  const toggleMode=()=>{
    if(mode=== 'light'){
      setMode('dark')
      setModeFontcolor('text-light')
      document.body.style.backgroundColor=' #282c30'
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode('light')
      setModeFontcolor('text-dark')
      document.body.style.backgroundColor='white'
      showAlert("Light mode has been enabled","warning");
    }
  }

  return (
    <>
    {/* <Router> */}
    <Navbar title="TextUtils" aboutText="About Us" toggleMode={toggleMode} modeFontcolor={modeFontcolor} mode={mode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
      {/* <Switch>
          <Route exact path="/about">
            <About/>
          </Route>
           */}
          {/* <Route exact path="/"> */}
            <FormText heading="Enter the text to analyze below" showAlert={showAlert} mode={mode}/>
          {/* </Route>
      </Switch> */}
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
