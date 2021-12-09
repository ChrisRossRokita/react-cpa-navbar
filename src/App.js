import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages';
import About from './components/pages/about';
import Services from './components/pages/services';
import Contact from './components/pages/contact';
import SignUp from './components/pages/signup';


function App() {
  return (
    <>
    <div className="App">
    </div>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/services' component={Services} />
        <Route path='/contact-us' component={Contact} />
        <Route path='/signup' component={SignUp} />
      </Switch>
    </Router>
    </>
  );
}

export default App