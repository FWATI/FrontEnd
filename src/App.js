import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./components/layout/Landing";
import Routes from "./components/routing/Routes";
import NavBar from "./components/layout/Navbar";
import NotFound from "./components/layout/NotFound";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactBar from "./components/layout/ContactBar";
import Footer from "./components/layout/Footer";

function App() {
  return (
      <Router>
          <Fragment>
              <ContactBar />
              <NavBar />
              <Switch>
                  <Route exact path="/" component={Landing} />
                  <Route component={Routes}/>
                  <Route component={NotFound}/>
              </Switch>
              <Footer />
          </Fragment>
      </Router>
  )
}

export default App;
