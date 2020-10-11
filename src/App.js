import React, { useState, useEffect } from 'react';
import { Route, Switch, useLocation, useHistory } from 'react-router-dom';
import axios from 'axios';

import NavBar from './components/NavBar';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Resume from './components/Resume';


function App() {
  const { pathname } = useLocation();
  const history = useHistory();

  const location = pathname.split('/')[1];
  console.log(location)
  if (location && !['skills', 'projects', 'contact'].includes(location)) {
    history.push('/');
  }

  const [ navBarHeight, setNavBarHeight ] = useState(0);
  const [ footerHeight, setFooterHeight ] = useState(0);
  const [ screenHeight, setScreenHeight ] = useState(0);
  const [ sectionInnerH, setSectionInnerH ] = useState(0);
  const [ screenWidth, setScreenWidth ] = useState(0);
  
  const pingBackend = () => {
    axios.get('https://aminecode.herokuapp.com/');
    axios.get('https://endeavor-app.herokuapp.com/');
    axios.get('https://fashion-fprint.herokuapp.com/');
    axios.get('https://suit-app.herokuapp.com/');
    axios.get('https://tv-show-watchlist.herokuapp.com/');
  }

  const handleResize = () => {
    const width = window.innerWidth 
    || document.documentElement.clientWidth 
    || document.body.clientWidth;

    const height = window.innerHeight 
    || document.documentElement.clientHeight
    || document.body.clientHeight;

    setScreenWidth(width);
    setScreenHeight(height);
    setTimeout(() => {}, 500);
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.addEventListener('resize', handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  useEffect(() => {
    handleResize();
    pingBackend();
  }, []);


  useEffect(() => {
    const h = screenHeight - (navBarHeight + footerHeight + 2 * 16) // p-3 of container div is 1rem = 16px
    setSectionInnerH(h);

  }, [navBarHeight, footerHeight, screenHeight])

  return (
    <div className="App">
      <Switch>
        <Route path='/resume'><Resume /></Route>
        <Route path='/'>
          <NavBar setNavBarHeight={setNavBarHeight} heightUpdate={screenHeight} />
          <Home sectionInnerDivH={sectionInnerH} navIconH={footerHeight} navBarH={navBarHeight} />
          <Skills sectionInnerDivH={sectionInnerH} navIconH={footerHeight} navBarH={navBarHeight} />
          <Projects sectionInnerDivH={sectionInnerH} navIconH={footerHeight} navBarH={navBarHeight} screenWidth={screenWidth} />
          <Contact sectionInnerDivH={sectionInnerH} navIconH={footerHeight} navBarH={navBarHeight} />
          <Footer setFooterHeight={setFooterHeight} heightUpdate={screenHeight} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
