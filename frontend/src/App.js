import './App.css';
import Intro from "./components/intro/index";
import Nav from "./components/nav/index";
import About from "./components/about/index";
import Skills from "./components/skills/index";
import Myworks from "./components/myworks/index";
import Quotes from "./components/quotes/index";
import Contact from "./components/contact/index";
import Footer from './components/footer';


import React, { useState, useEffect } from 'react';
import './darkMode.css';
// function App() {
//   const [theme, setTheme] = useState('light');
//   const toggleTheme = () => {
//     if (theme === 'light') {
//       setTheme('dark');
//     } else {
//       setTheme('light');
//     }
//   };
//   useEffect(() => {
//     document.body.className = theme;
//   }, [theme]);
//   return (
//     <div className={`App ${theme}`}>
//       <button onClick={toggleTheme}>Toggle Theme</button>
//       <h1>Hello, world!</h1>
//     </div>
//   );
// }
function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
  if(theme === 'light') {
  setTheme('dark');
  } else {
  setTheme('light');
  }
  };
  useEffect(() => {
  document.body.className = theme;
  }, [theme]);
  
  return (
   
    <div className={`App ${theme}`}>
    {/* https://drive.google.com/uc?export=view&id=PPjZ4p75bkljk1GF3Nl1zsLm2CwedPxR_ */}
        <Intro toggleTheme={toggleTheme}/>      
        <About />
        <Skills />
        <Myworks />
        <Quotes />
        <Contact />
        <Nav/>
        <Footer/>
    </div>
  );
}

export default App;
