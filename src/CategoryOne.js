import React, { Component } from 'react' 
import axios from 'axios' 
import { Card, Button,Spinner} from 'react-bootstrap' 
import{Link} from 'react-router-dom' 

export default class CategoryOne extends Component { 
 
    constructor(props) { 
        super(props) 
        this.state = { 
            meals: [],
            item:'' 
 
        } 
        this.setState({ lan: true }) 
        const a = axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${this.props.match.params.id2}`) 
        a.then((s) => { 
            console.log(s) 
            this.setState({ meals: s.data.meals }) 
        }) 
    } 
 
    componentDidUpdate(prevProps, prevState) { 
 
        if (prevProps !== this.props.match.params.id2) { 
            const a = axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${this.props.match.params.id2}`) 
            a.then((s) => { 
                console.log(s) 
                this.setState({ meals: s.data.meals }) 
            }) 
        } 
    } 
    
    render() {
 
        return ( 
            <> 
         <div className="text-center" style={{marginTop:"50px"}}>      
                <div className='d-flex justify-content-around flex-wrap '> 
                    {this.state.meals.map((k) => { 
                        return ( 
                            <> 
                                <Card className="m-3" style={{ width: '18rem' }}> 
                                    <Card.Img variant="top" src={k.strMealThumb} /> 
                                    <Card.Title>{k.strMeal}</Card.Title> 
                                    <Button as={Link} to={`/asan/${k.idMeal}`} variant="info">Подробнее</Button>{' '}
                                </Card> 
                            </> 
                        ) 
                    })}
                    </div> 
                     
                </div>
            </> 
        ) 
    }}