import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {

  const [mode,setmode] = useState('light') //whether dark mode is enabled or not
  const [alert,setalert] = useState(null)

  const showAlert = (message, type)=>
  {
    setalert({
      msg:message,
      type:type
    })
    setTimeout(()=>
    {
      setalert(null)
    },2000)
  }
  const [gmode,sgmode] = useState('light')
  const toggleModeGreen = ()=>
  {
    if(gmode==='light')
    {
      sgmode('green')
      document.body.style.backgroundColor='lightgreen'
      showAlert("Green mode has been enabled","success")
    }
    else
    {
      sgmode('light')
      document.body.style.backgroundColor='white'
      showAlert("Light mode has been enabled","success")
    }
  }
  const toggleMode=()=>
  {
    if(mode ==='light')
    {
      setmode ('dark')
      document.body.style.backgroundColor='#053B50'
      showAlert("Dark mode has been enabled",'success')
    }
    else{
      setmode('light')
      document.body.style.backgroundColor='white'
      showAlert("Light mode has been enabled",'success')
    }
  }
  return (
    <>
    {/* <Router>
    <Navbar title="TextUtils" aboutText="About TextUtils" mode ={mode} toggleMode = {toggleMode} toggleModeGreen = {toggleModeGreen}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
          <Route exact path="/about" element={<About/>}>
            
          </Route>
         
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="ENTER THE TEXT BELOW TO USE" mode={mode}/>}>
          
          
          </Route>
    </Routes>
      
  
    </div>
    </Router> */}
    <Navbar title="TextUtils" aboutText="About TextUtils" mode ={mode} toggleMode = {toggleMode} toggleModeGreen = {toggleModeGreen}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <TextForm showAlert={showAlert} heading="ENTER THE TEXT BELOW TO USE" mode={mode}/>
    </div>
    
    </>
  );
}

export default App;
