import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styles from './app.module.css';
import Header from './header';
import Home from './home';
import Exercises from './exercises';
import Blogs from './blogs';
import Profile from './profile';
import LoginModal from './login';

function App() {
  return (
    <Router>
      <div className={styles.body}>
        <Route path='/' component={Header} />
        <main className={styles.main__container} />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/exercises' exact component={Exercises} />
          <Route path='/blogs' exact component={Blogs} />
          <Route path='/login' exact component={LoginModal} />
          <Route path='/profile' exact component={Profile} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
