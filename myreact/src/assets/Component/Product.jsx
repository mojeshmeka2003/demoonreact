import React from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function Product(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
         {props.desc}
        </Card.Text>
        <Button variant="primary">{props.price}</Button>
      </Card.Body>
    </Card>
  )
}