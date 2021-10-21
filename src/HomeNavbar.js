import React, { Component } from 'react'
import { Form, Nav, NavDropdown, FormControl, Container, Navbar,Button } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Basket from "./Basket"

export default class HomeNavbar extends Component {
  state = {
    categories: [],
    search:'',

  }
  componentDidMount() {
    const a = axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
    a.then((v) => {
      this.setState({ categories: v.data.meals })
 })
    const t = axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`) 
    t.then((a)=> { 
      console.log(a) 
      this.setState(()=>{ 
        const t = a.data.meals 
        return{ 
          search: t 
        } 
      }) 
    })
  }


  render() {
    const r =this.state.categories || []
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link as={Link} to={'/Basket'} >Basket</Nav.Link>
             
                <NavDropdown title="Countries" id="basic-nav-dropdown">
                  {r.map((t)=>
                <NavDropdown.Item as={Link} to={`/CategoryOne/${t.strArea}`} value={t.strArea}>{t.strArea}</NavDropdown.Item>)}
                </NavDropdown>
              </Nav>
              <Form className="d-flex forms">
              < FormControl
                  onChange={(e)=>this.setState({search:e.target.value})}
                  type="search"
                  placeholder="Search"
                  className="mr-2 formcontrol"
                  aria-label="Search"
                />
                  <Button variant="warning" as={Link} to={`/search/${this.state.search}`}>Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container >
        </Navbar>
      </div>
    )
  }
}
