import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import {Switch,Route} from"react-router-dom" ;
import Item from './Item' 
import Moredetails from './Moredetails';
import CategoryOne from './CategoryOne'
import Basket from './Basket'
import Search from './Search'



ReactDOM.render(
 <BrowserRouter>
  <Switch> 
  <Route path="/asan/:id" component={Moredetails}/> 
  <Route path="/CategoryOne/:id2" component={CategoryOne}/> 
  <Route path="/item/:title" component={Item}/> 
  <Route path="/basket" component={Basket}/>
  <Route path="/Search/:id" component={Search}/>

      <Route path="/" > 
            <App/>
        </Route> 
    </Switch>
 </BrowserRouter>,
  document.getElementById('root')
);


