import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './views/home';
import EnviarCorreo from './views/mailsended';
import NotFound from './views/notfound';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Blogs from './views/blogs';
import Blog from './views/blog';
import Login from './views/login';
import DashMain from './views/dashboard';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/correoenviado" component={EnviarCorreo} />
        <Route exact path="/blogs" component={Blogs} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/dashboard" component={DashMain} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
