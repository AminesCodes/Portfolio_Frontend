import React, { useState, useEffect } from 'react';
import axios from 'axios';

import NavBar from './components/NavBar';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Footer from './components/Footer';


function App() {
  const pingBackend = () => {
    // axios.get('https://aminecode.herokuapp.com/');
    // axios.get('https://endeavor-app.herokuapp.com/');
    // axios.get('https://fashion-fprint.herokuapp.com/');
    // axios.get('https://suit-app.herokuapp.com/');
    // axios.get('https://tv-show-watchlist.herokuapp.com/');
  }

  useEffect(() => {
    pingBackend();
  }, []);

  const [ navBarHeight, setNavBarHeight ] = useState(0);
  const [ footerHeight, setFooterHeight ] = useState(0);
  const [ screenHeight, setScreenHeight ] = useState(0);
  const [ sectionInnerH, setSectionInnerH ] = useState(0);

  const getNavBarHeight = dim => {
    setNavBarHeight(dim);
  }

  const getFooterHeight = dim => {
    setFooterHeight(dim);
  }

  const getScreenHeight = dim => {
    setScreenHeight(dim)
  }

  useEffect(() => {
    setSectionInnerH(screenHeight 
      - (navBarHeight + footerHeight 
          + 2 * 16 // p-3 of container div is 1rem = 16px
        )); // missing the arrows icons

  }, [navBarHeight, footerHeight, screenHeight])

  return (
    <div className="App">
      <NavBar getNavBarHeight={getNavBarHeight}/>
      <Home sectionInnerDivH={sectionInnerH} navIconH={footerHeight} navBarH={navBarHeight}/>
      <Skills sectionInnerDivH={sectionInnerH} navIconH={footerHeight} navBarH={navBarHeight}/>
      <Projects sectionInnerDivH={sectionInnerH} navIconH={footerHeight} navBarH={navBarHeight} getScreenHeight={getScreenHeight}/>
      <Contact sectionInnerDivH={sectionInnerH} navIconH={footerHeight} navBarH={navBarHeight}/>
      <Footer getFooterHeight={getFooterHeight}/>
    </div>
  );
}

export default App;
