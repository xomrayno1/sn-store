import './App.css';
import React from 'react';
import HomeComponents from './components/home/HomeComponents'
import CategoryComponents from './components/manage/category/CategoryComponents'
import ProductComponents from './components/manage/product/ProductComponents'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/manage/" exact>
            <Redirect to="/manage/product"  /> 
          </Route>
          <Route path="/manage/category" exact>
            <CategoryComponents />
          </Route>
          <Route path="/manage/product" exact>
            <ProductComponents />
          </Route>
          <Route path="/">
            <HomeComponents />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
