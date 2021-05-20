import React from 'react'
import { BrowserRouter as Router,
  Switch, 
  Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import NotFoundPage from './pages/NotFoundPage'
import useData from './hooks/useData'


function App() {
  
  const data = useData()
  console.log(data)

  return (
    <Router>
      <Switch>
          <Route exact path="/">
              <MainPage data={data.data} />
          </Route>      
          <Route>
              <NotFoundPage />
          </Route>                                                           
      </Switch>
  </Router>
  );
}

export default App;
