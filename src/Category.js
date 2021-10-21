
import React from 'react'; 
import {Card,Container} from "react-bootstrap" 
import{Link} from 'react-router-dom' 
import axios from 'axios' 
import HomeNavbar  from "./HomeNavbar"
 
class Category extends React.Component { 
   state={ 
    categories: [], 
    bul:false
   } 
   componentDidMount(){ 
    //  this.setState({lan})
      const a = axios.get('https://www.themealdb.com/api/json/v1/1/categories.php'); 
      a.then((u)=>{ 
         console.log(u) 
         this.setState({categories:u.data.categories}) 
      }) 
   }    
   render() { 
      return ( 
        <> 
   
    <HomeNavbar/>
        <div className="row">     
        
          <Container className="d-flex justify-content-around flex-wrap mt-3"> 
            {this.state.categories.map((v) => { 
              return ( 
                <Card className="shadow-lg p-1 m-2 " as={Link} to ={`/Item/${v.strCategory}`} style={{ width: "18rem", marginTop:"20px"}}> 
                  <Card.Img  variant="top" src={v.strCategoryThumb} /> 
                  <Card.Body> 
                    <Card.Title>{v.strCategory}</Card.Title> 
                  </Card.Body> 
                </Card> 
              ); 
            })} 
          </Container> 
            </div>
        </> 
      ); 
   } 
} 
 
export default Category;
