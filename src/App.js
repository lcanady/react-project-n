import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styles from "./app.module.css";
import Header from "./components/header";
import Exercises from "./components/exercises";
import Home from "./components/Home";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Layout>
        <Route path="/" exact component={Home} />
        <main className={styles.main__container} />
        <Switch>
          <Route path="/exercises" exact component={Exercises} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
