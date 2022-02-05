import React from 'react';
import Component from './Components/Nav';
import Body from './Components/body'
import About from './Components/About'
import Projects from './Components/Projects';
// import Projects from './Components/Projects';
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom';
import ContactMe from './Components/contactme';
import Footer from './Components/footer';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={
            
            <div>

              <div className="App back">
        <Component />

                <Body />
              </div>
              <About />
              
              <Projects />
              <ContactMe />
              <Footer></Footer>
            </div>
            
          } />
        </Routes>
      </Router>

    </div >
  );
}

export default App;
