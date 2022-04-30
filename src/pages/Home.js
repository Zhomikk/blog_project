
import React, { Component } from "react";
import { Container, Card, Row, Button } from "react-bootstrap";
import Carouselbox from "./Components/Carouselbox";

export default class Home extends Component {
  render() {
    return (
      <div>
      <Carouselbox>
      </Carouselbox>
        <Container className='mt-3'>
          <h2 className="text-center m-4">How to be a tourist?</h2>
          <Row md={2}>
            <Card>
            <Card.Img variant='top' className = 'mt-3'
            src='https://images.pexels.com/photos/346798/pexels-photo-346798.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />  
            <Card.Body>
              <Card.Title>Passport help</Card.Title>
              <Card.Text>
                Need help? Click here to find out how to get a passport.
              </Card.Text>
              <Button variant="primary">Get passport</Button>
            </Card.Body>
            </Card> 

            <Card>
            <Card.Img variant='top' className = 'mt-3'
            src='https://images.pexels.com/photos/11842150/pexels-photo-11842150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />  
            <Card.Body>
              <Card.Title>Need some food?</Card.Title>
              <Card.Text>
               Here is a list of places to eat.
              </Card.Text>
              <Button variant="primary">Find cafe</Button>
            </Card.Body>
            </Card>

            <Card className="mt-5">
            <Card.Img variant='top' className = 'mt-3'
            src='https://images.pexels.com/photos/35969/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />  
            <Card.Body>
              <Card.Title>Lost?</Card.Title>
              <Card.Text>
               Let's find out where are you!
              </Card.Text>
              <Button variant="primary">Find my hotel</Button>
            </Card.Body>
            </Card>

            <Card className='mt-5'>
            <Card.Img variant='top' className = 'mt-3'
            src='https://images.pexels.com/photos/821754/pexels-photo-821754.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />  
            <Card.Body>
              <Card.Title>Support service</Card.Title>
              <Card.Text>
               If you have questions, please contact us.
              </Card.Text>
              <Button variant="primary">Call</Button>
            </Card.Body>
            </Card>
            </Row>
        </Container>
      
      </div>
    );
  }
}
