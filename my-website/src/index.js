import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

function MyApp() {
  return (
    <div className="About">
      <div className="Name">
        
        <h1> Tanner Oates</h1>
      </div>
      <div className="Job">
        <h4> Student / Developer</h4>
      </div>
      <br></br>
      <br></br>
      <div className="About-me">
        <h4> Currently a student at <br></br>California State University, Chico</h4>
      </div>
      <br></br>
      <br></br>
      <div className="Link-parent">
        <b>
        <h4 style={{color:'white'}}>Check out my</h4>
        </b>
        <div className="Link-button">
          <a href="https://www.linkedin.com/in/tanner-oates" target="_blank" rel="noreferrer noopener" className="Link-button"> <h4> LinkedIn </h4> </a> 
          <a href="https://github.com/TannerOates2" target="_blank" rel="noreferrer noopener" className="Link-button"> <h4> GitHub </h4> </a>
          <a href="resume.pdf" target="_blank" rel="noreferrer noopener" className="Link-button"> <h4> Resume </h4> </a>
        </div>
      </div>
    </div>
  );
}



const el = <MyApp />;
ReactDOM.render(
  el,
  document.getElementById('root')
);

reportWebVitals();