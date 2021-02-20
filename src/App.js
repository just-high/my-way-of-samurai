import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialog from './components/Dialogs/Dialog';
import Profile from './components/Profile/Profile';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Music from './components/Music/Music';
import News from './components/News/News';

const App = () => {
  return (
    <Router>
      <div className='app-wrapper'>

        <Header />
        <Navbar />
        <div className={"app-wrapper-content"}>
          <Switch>
            <Route ъъъ path='/dialog' component={Dialog} />
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/Music' component={Music} />
            <Route exact path='/news' component={News} />
          </Switch>
        </div>

      </div>
    </Router>
  );
}

export default App;