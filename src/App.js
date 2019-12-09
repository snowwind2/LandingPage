import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/shared/Header/Header";
import Footer from "./components/shared/Footer/Footer";

import { LandingPage, DemoPage } from "./containers/index";

import "./assets/scss/default.scss";

function App() {
  return (
    <Router>
      <main>
        <Header />
        <section className="wo-content">
          <Switch>
            <Route path="/" component={LandingPage} exact />
            <Route path="/demo" component={DemoPage} />
          </Switch>
        </section>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
