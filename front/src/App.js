import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './views/home';
import NotFound from './views/notfound';
import Navbar from './components/navbar';
import Footer from './components/footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
