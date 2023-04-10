import React from 'react';
import "./skills.css";

const Skills = () => {
  return (
    <section id="skills" className="skillssec">
      <h5>My Skills</h5>
        <h2>What I do?</h2>
        
      <div className="container skills_container">
       
        <div className="skill_left">
          <a href="https://html.com/" target="_blank"><div className='frontDiv'><img className="skill-image"src="html5.png" alt=""/>HTML5</div></a>
          <a href="https://www.css3.com/"  target="_blank"><div className='frontDiv'><img className="skill-image"src="css.png" alt=""/>CSS3</div></a>
          <a href="https://getbootstrap.com/docs/5.0/getting-started/introduction/"  target="_blank"><div className='frontDiv'><img className="skill-image"src="bootstrap.png" alt=""/>BOOT5</div></a>
          <a href="https://www.javascript.com/learn"  target="_blank"><div className='frontDiv'><img className="skill-image"src="javascript.png" alt=""/>JS</div></a>
          <a href="https://mui.com/"  target="_blank"><div className='frontDiv'><img className="skill-image" src="mui.png" alt=""/>MUI</div></a>
          <a href="https://sass-lang.com/"  target="_blank"><div className='frontDiv'><img className="skill-image"src="sass.png" alt=""/>SASS</div></a>
          <a href="https://legacy.reactjs.org/"  target="_blank"><div className='frontDiv'><img className="skill-image" src="react.png" alt=""/>REACT</div></a>
        </div>

        <div className="skill_right">
        <a  href="https://nodejs.org/en" target="_blank"><div className='frontDiv'  ><img className="skill-image" src="nodejs.png" alt=""/>NODE</div></a>
        <a href="https://devdocs.io/express/" target="_blank"><div  className='frontDiv'  ><img  className="skill-image" src="express-js.png" alt=""/>EXPRESS</div></a>
        <a href="https://www.mongodb.com/docs/" target="_blank"><div  className='frontDiv'  ><img className="skill-image" src="mongodb.png" alt=""/>MONGO</div></a>
        <a href="https://github.com/" target="_blank"><div  className='frontDiv'  ><img className="skill-image" src="git.png" alt=""/>GIT</div></a>

        </div>
      </div>

    </section>
  )
}

export default Skills;
