import React, { Component } from 'react';
import Header from './header/header.js';
import Home from './home/home.js';
import Contact from './contact/contact.js';
import Portfolio from './portfolio/portfolio.js';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <div className="site-wrapper">
            <div className="site-wrapper-inner">
                <div className="cover-container">
                    <Header />
                    <Route exact path="/" component={Home} />
                    <Route path="/portfolio" component={Portfolio} />
                    <Route path="/contact" component={Contact} />
                </div>
            </div>

        </div>

    );
  }
}

export default App;
