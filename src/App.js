import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './views/Home'

import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css';



const App = () => {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
  )
}

export default App;
