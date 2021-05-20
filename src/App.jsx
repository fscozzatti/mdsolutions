import React from 'react'
import { BrowserRouter as Router,
  Switch, 
  Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import NotFoundPage from './pages/NotFoundPage'


function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/">
              <MainPage />
          </Route>      
          <Route>
              <NotFoundPage />
          </Route>                                                           
      </Switch>
  </Router>
  );
}

export default App;
