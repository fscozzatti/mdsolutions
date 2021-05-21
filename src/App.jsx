import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router,
  Switch, 
  Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import NotFoundPage from './pages/NotFoundPage'
import useData from './hooks/useData'
const datos = 
{
	data:[
    {
  "author": "", 
  "title": "عموتة بعد الانتصار على الكاميرون: &quot;بإرادتنا ا…ف المباراة الصعبة وتأهلنا للمباراة النهائية&quot;", 
  "description": "هنأ الإطار الوطني الحسين عموتة، مدرب المنتخب المغر…قة كأس أمم أفريقيا للاعبين المحليين  2020", 
  "country": "ma", 
  "category": "General", 
  "published_at": "2021-02-04T12:48:36+00:00"},
  {
    "author": "", 
    "title": "عموتة بعد الانتصار على الكاميرون: &quot;بإرادتنا ا…ف المباراة الصعبة وتأهلنا للمباراة النهائية&quot;", 
    "description": "هنأ الإطار الوطني الحسين عموتة، مدرب المنتخب المغر…قة كأس أمم أفريقيا للاعبين المحليين  2020", 
    "country": "ma", 
    "category": "General", 
    "published_at": "2021-02-04T12:48:36+00:00"},
    {
      "author": "", 
      "title": "عموتة بعد الانتصار على الكاميرون: &quot;بإرادتنا ا…ف المباراة الصعبة وتأهلنا للمباراة النهائية&quot;", 
      "description": "هنأ الإطار الوطني الحسين عموتة، مدرب المنتخب المغر…قة كأس أمم أفريقيا للاعبين المحليين  2020", 
      "country": "ma", 
      "category": "General", 
      "published_at": "2021-02-04T12:48:36+00:00"},
      {
        "author": "", 
        "title": "عموتة بعد الانتصار على الكاميرون: &quot;بإرادتنا ا…ف المباراة الصعبة وتأهلنا للمباراة النهائية&quot;", 
        "description": "هنأ الإطار الوطني الحسين عموتة، مدرب المنتخب المغر…قة كأس أمم أفريقيا للاعبين المحليين  2020", 
        "country": "ma", 
        "category": "General", 
        "published_at": "2021-02-04T12:48:36+00:00"},
        {
          "author": "", 
          "title": "عموتة بعد الانتصار على الكاميرون: &quot;بإرادتنا ا…ف المباراة الصعبة وتأهلنا للمباراة النهائية&quot;", 
          "description": "هنأ الإطار الوطني الحسين عموتة، مدرب المنتخب المغر…قة كأس أمم أفريقيا للاعبين المحليين  2020", 
          "country": "ma", 
          "category": "General", 
          "published_at": "2021-02-04T12:48:36+00:00"},
          {
            "author": "", 
            "title": "عموتة بعد الانتصار على الكاميرون: &quot;بإرادتنا ا…ف المباراة الصعبة وتأهلنا للمباراة النهائية&quot;", 
            "description": "هنأ الإطار الوطني الحسين عموتة، مدرب المنتخب المغر…قة كأس أمم أفريقيا للاعبين المحليين  2020", 
            "country": "ma", 
            "category": "General", 
            "published_at": "2021-02-04T12:48:36+00:00"},]
}

function App() {

  const data = datos//useData()


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
