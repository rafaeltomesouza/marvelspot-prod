import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { Threads } from  './pages/Threads';
import { AddPost } from './pages/AddPost';
import './styles/global.scss';

function App() {
  return(
    <Router>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/threads/:idcommic' component={Threads} />
        <Route exact path='/addpost/:idcommic' component={AddPost} />
      </Switch>
    </Router>
  )
}

export default App;
