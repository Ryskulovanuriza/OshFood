import React, { Component } from 'react'
import { Prev } from 'react-bootstrap/esm/PageItem'
import { Card, Container, Button, Modal, Form } from "react-bootstrap"
import { Link } from 'react-router-dom'
import axios from 'axios';

const token = `2017702022:AAEQQGfOIj7_Z25Vy-SD5N6P5A6nJJ4A9UY`;
const chat_id = `1149407937`


export default class basket extends Component {
  componentDidMount() {
  }
  constructor() {
    super()
  }
  state = {
    item: JSON.parse(localStorage.getItem(`key`)) || [],
    number: '',
    name: '',
    Address: '',
    chec: [],
    show: false,
    text: '',
    remove: false,
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.item !== prevState.item) {
      localStorage.setItem('key', JSON.stringify(this.state.item))
    }
  }
  
    nur = () => { 
      if (this.state.remove) { 
          const a = this.state.item.filter(s => !this.state.chec.find(t => t.idMeal === s.idMeal));     
          this.setState({item: a}) 
      }
      this.to(); 
  
  }
  todo() {
    this.setState({ show: !this.state.show })
  };
  to() {
    axios.get(`https://api.telegram.org/bot${token}/sendMessage`, {
      params: {
        parse_mode: "HTML",
        chat_id: `1149407937`,
        text: `<b>aty</b>: <i>${this.state.name}</i>\n<b>number</b>: <i>${this.state.number}</i>\n<b>заказ</b>: <i>${this.state.chec}</i>`
      }
    })
      .then((v) => {
        console.log(v);
      });
      if(this.state.remove){
      this.setState((p) => {
        const del = this.state.chec.filter(i => i.idMeal === p.item.idMeal)
        console.log(del)
        return { item: del }
      })
      }
  }

  check = (n) => {
    if (this.state.chec.find(v => v === n.strMeal)) {
      const b = this.state.chec.filter(x => x.idMeal !== n.idMeal)
      this.setState((p) => {
        return { chec: b }
      })
    } else {
      this.setState(pre => {
        const f = [...pre.chec, n]
        return { chec: f };
      })
    }
  }
  todoAdd = (h) => {
    if (this.state.item.find(v => v.idMeal === h.idMeal)) {
      const del = this.state.item.filter(i => i.idMeal !== h.idMeal)
      this.setState((p) => {
        return { item: del }
      })
    } else {
      this.setState(pre => {
        const a = [...pre.item, h]
        return { item: a };
      })
    }
  }
  render() {
    console.log(this.state.chec)
    return (
      <>
        <div>
          <Button onClick={() => { this.todo() }}>older</Button>
          <Modal show={this.state.show} onHide={() => { this.todo() }}>
            <Modal.Header closeButton>Order Meals</Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="formGroupName">
                  <Form.Label >name</Form.Label>
                  <Form.Control onChange={(e) => { this.setState({ name: e.target.value }) }} type="name" placeholder="Enter name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupNumber">
                  <Form.Label >Contact phone number</Form.Label>
                  <Form.Control onChange={(e) => { this.setState({ number: e.target.value }) }} type="text" placeholder="phone number" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupAddress">
                  <Form.Label>Address</Form.Label>
                  <Form.Control type="text" onChange={(e) => { this.setState({ Address: e.target.value }) }} placeholder="Address" />
                </Form.Group >
                {this.state.item.map((h) => {
                  return (
                    <>
                      <div className="d-block">
                        {console.log(this.state.chec)}
                        <input onChange={() => { this.chec(h) }}
                          type="checkbox" id="coding" name="interest" value="coding" />
                        <label for="coding">{h.strMeal}</label>
                      </div>
                    </>)
                })}
                <hr />
                <div className="d-block" style={{ display: "inline-block" }}>
                  <input type="checkbox" id="coding" name="interest" value="coding" />
                  <label onChange={(e)=>this.setState({remove: e.target.checked})} for="coding">Remove meal from trash after order</label>
                </div>

              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button className="btn btn-secondary" onClick={() => { this.todo() }}>Close</Button>
              <Button type="button" disabled={!this.state.number.length > 0 && !this.state.name.length > 0 && !this.state.Address.length > 0} class="btn btn-primary" onClick={() => this.nur()}>Send this </Button>
            </Modal.Footer>
          </Modal>



        </div>
        <div>
          <Container className="d-flex justify-content-around flex-wrap mt-3">
            {this.state.item.map((v) => {
              return (
                <Card className="shadow-lg p-1 m-2 " style={{ width: "18rem", marginTop: "20px" }}>
                  <Card.Img variant="top" src={v.strMealThumb} />
                  <Card.Body>
                    <Card.Title as={Link} to={`/Item/${v.strCategory}`}>{v.strMeal}</Card.Title>
                  </Card.Body>
                  <Button type={'button'} className={this.state.item.find(t => t.idMeal === v.idMeal) ? 'btn btn-danger' : 'btn btn-info'} onClick={() => this.todoAdd(v)}>{this.state.item.find(t => t.idMeal === v.idMeal) ? 'Удалить' : ' Добавить '}</Button>
                </Card>
              );
            })}
          </Container>
        </div>
      </>
    )
  }
}
