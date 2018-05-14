import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.scss';
import {BrowserRouter , Route } from 'react-router-dom';

let Header = () => (
  <div>
    Header
  </div>
);

let About = () => (
  <div>
    About
  </div>
);

let Contact = () => (
  <div>
    Contact
  </div>
);

let Help = () => (
  <div>
    Help
  </div>
);

let routes = (
  <BrowserRouter>
    <div>
      <Route path="/" component={Header} exact={true}/>
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/help" component={Help} />
    </div>
  </BrowserRouter>
);

let app = document.getElementById('app');

ReactDOM.render(routes, app);