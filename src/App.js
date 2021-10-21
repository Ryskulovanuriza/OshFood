import React, { Component } from 'react' 
import "react-bootstrap"; 
import Category from './Category' 
import HomeNavbar  from "./HomeNavbar"
 
export default class App extends Component { 
    render() { 
        return ( 
            <div>                     
                <Category/>
                
            </div> 
        ) 
    } 
}