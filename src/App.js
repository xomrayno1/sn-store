import './App.css';
import React, {useEffect} from 'react';
import HomeComponents from './components/user/home/HomeComponents'
import CategoryComponents from './components/manage/category/CategoryComponents'
import ProductComponents from './components/manage/product/ProductComponents'
import ContactComponent from './components/user/contact/ContactComponents'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function App() {
  console.log("App component");
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/manage/" exact>
            <Redirect to="/manage/product"  /> 
          </Route>
          <Route path="/manage/category" >
            <CategoryComponents />
          </Route>
          <Route path="/manage/product" >
            <ProductComponents />
          </Route>
          <Route path="/" exact>
            <HomeComponents />
          </Route>
          <Route path="/contact">
            <ContactComponent />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
