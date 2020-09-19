import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styles from './app.module.css';
import Header from './components/header';
import Exercises from './components/exercises';

function App() {
  return (
    <Router>
      <div className={styles.body}>
        <Route path="/" component={Header} />
        <main className={styles.main__container} />
        <Switch>
          <Route path="/exercises" exact component={Exercises} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
