import './App.css';
import Intro from "./components/intro/index";
import Nav from "./components/nav/index";
import About from "./components/about/index";
import Skills from "./components/skills/index";
import Myworks from "./components/myworks/index";
import Quotes from "./components/quotes/index";
import Contact from "./components/contact/index";
import axios from "axios";
import { useEffect, useState } from 'react';

function App() {

  const [getter,setGetter] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:8000/get").then((response)=>{
      setGetter(response.data);
    })
  },[])

  console.log(getter);
  
  return (
    <>
        <Intro />      
        <About/>
        <Skills/>
        <Myworks/>
        <Quotes/>
        <Contact/>
        <Nav/>

    </>
  );
}

export default App;
