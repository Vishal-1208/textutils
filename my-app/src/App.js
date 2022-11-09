
import './App.css';
import Aboutus from './components/Aboutus';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
   const [mode, setmode] = useState("light");

    const toggleMode = () =>{
    if (mode === "light"){
      setmode("dark")
      document.body.style.backgroundColor ="#1d2239"
    }
    else{
      setmode("light")
      document.body.style.backgroundColor ="white"
    }
   }
  return (
    <>
    <Router>
    <Navbar title="TextUtils" about="about" mode={mode} toggleMode={toggleMode} />
    
    <Routes>
    <Route path="/Aboutus" element={<Aboutus  mode={mode}/>}  ></Route>    
    <Route  path="/TextForm" element={<TextForm mode={mode} heading="Text Analyze App" />}></Route>
        </Routes>
    
    </Router>

    </>
  );
}

export default App;
