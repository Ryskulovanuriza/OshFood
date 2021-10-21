import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import axios from 'axios';



export default class Moredetails extends Component {
  state = {
    item: [],
  }
  componentDidMount() {
    const b = axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${this.props.match.params.id}`);
    b.then((v) => {
      console.log(v.data.meals)
      if (v.data.meals == null) {
        this.setState({ item: [] })
      } else {
        this.setState({ item: v.data.meals })
      }
    })
  }

  render() {
      return(
        <>
        {
          this.state.item.map((m) => {
            return (
              <div>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={m.strMealThumb} />
                  <Card.Body>
                    <Card.Title>{m.strInstructions}</Card.Title>
                    {/* <Card.Text>{}</Card.Text> */}
                  </Card.Body>
                </Card>
                </div>
            )
          }
        )
        }
        </>
      )
  }
  }
