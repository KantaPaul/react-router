import React from 'react';
// import Header from '../Header';
import About from '../About';
import Welcome from '../Welcome';
import Contact from '../Contact';
import Portfolio from '../Portfolio';
import ProtfolioItem from '../Portfolioitem';
import NotFound from '../NotFound';
import {BrowserRouter, Route, Switch, Link, NavLink  } from 'react-router-dom';

let Header = () => (
  <div className="header">
    <h1>Portfolio</h1>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" exact={true} to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" exact={true} to="/portfolio">Portfolio</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  </div>
)

let Routes = () => (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Welcome path="/" component={Welcome} exact={true}/> 
          <About path="/about" component={About} />
          <Portfolio path="/portfolio" exact={true} component={Portfolio} />
          <ProtfolioItem path="/portfolio/:id" component={ProtfolioItem} />
          <Contact path="/contact" component={Contact} />
          <NotFound component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
);

export default Routes;