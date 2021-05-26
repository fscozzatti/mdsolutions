import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router,
  Switch, 
  Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import NotFoundPage from './pages/NotFoundPage'
import R2r4 from './pages/R2r4'
import useData from './hooks/useData'
import orderBy from 'lodash/orderBy'


function App() {
  const [columnToSort, setColumnToSort] = useState("")
  const [sortDirection, setSortDirection] = useState("desc")
  const data = useData()

  const invertDirection = {
    asc:"desc",
    desc:"asc"
  }

  const handleSort = (columnName) => {
    setColumnToSort(columnName)
    setSortDirection(columnToSort === columnName ? invertDirection[sortDirection]:"asc")
  }


  return (
    <Router>
      <Switch>
          <Route exact path="/">
              <MainPage />
          </Route>  
          <Route path="/R2r4">
              <R2r4 data={orderBy(data.data, columnToSort, sortDirection)}
              handleSort={(columnName) => {handleSort(columnName)}} 
              columnToSort={columnToSort} sortDirection={sortDirection}
              />
          </Route> 
          <Route>
              <NotFoundPage />
          </Route>                                                           
      </Switch>
  </Router>
  );
}

export default App;
