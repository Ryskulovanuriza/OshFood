import axios from 'axios' 
import React, { Component } from 'react'; 
import {Card, Spinner,} from 'react-bootstrap' 
 
export default class Search extends Component { 
    constructor(props){ 
        super(props) 
        this.state = { 
            meals: [], 
            lan: true, 
        } 
    } 
 
    request = ()=>{ 
        this.setState({lan: true}) 
       const a = axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${this.props.match.params.id}`) 
       a.then((v) => { 
        console.log(v) 
          this.setState({meals: v.data.meals}) 
          a.finally(()=> { 
            this.setState({lan: false}) 
          }) 
        }); 
    } 
    componentDidMount(){ 
        this.request() 
    } 
    componentDidUpdate(prevProps, prevState){ 
        if (this.props.match.params.id !== prevProps.match.params.id) { 
           this.request() 
                
        } 
    } 
    render() { 
        return ( 
            <> 
             {this.state.lan ? ( 
                <div className='spinner'> 
                <Spinner animation="grow" variant="primary" /> 
                <Spinner animation="grow" variant="secondary" /> 
                <Spinner animation="grow" variant="success" /> 
                <Spinner animation="grow" variant="danger" /> 
                <Spinner animation="grow" variant="warning" /> 
                <Spinner animation="grow" variant="info" /> 
                <Spinner animation="grow" variant="dark" />  
                </div> 
                ) : 
               <div className='d-flex justify-content-around flex-wrap m-3'> 
                    {this.state.meals.map((v) => { 
                        return( 
                            <Card  style={{ width: '18rem' }}> 
                            <Card.Img variant="top" src={v.strMealThumb} /> 
                            <Card.Body> 
                            <Card.Title>{v.strMeal}</Card.Title> 
                            </Card.Body> 
                            </Card> 
                        )})}  
               </div> 
               }    
            </> 
        ) 
    } 
}