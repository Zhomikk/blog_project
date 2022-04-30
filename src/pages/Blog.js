import React, { Component } from "react";
import { Button, Media, Container, Col, Row, Card, ListGroup } from "react-bootstrap";


export default class Blog extends Component {
  render() {
    return (
      <Container>
        <Row md={3}>
          <Col md="9">
          <Card className='mt-5'>
            <Card.Body>
              <Card.Title>Blog Post</Card.Title>
              <Card.Text>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget orci imperdiet, pretium justo ut, pulvinar lorem. Fusce ultricies, libero quis vestibulum lacinia, libero tortor interdum lorem, nec blandit mi magna nec tortor. Aenean convallis iaculis velit vitae lobortis. Sed scelerisque interdum augue ut eleifend. Maecenas accumsan odio placerat suscipit ornare. Pellentesque ut turpis posuere, ultricies eros at, molestie dui...              </Card.Text>
              <Button variant="primary">Read more</Button>
            </Card.Body>
            </Card>

            <Card className='mt-5'>
            <Card.Body>
              <Card.Title>Blog Post 2</Card.Title>
              <Card.Text>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget orci imperdiet, pretium justo ut, pulvinar lorem. Fusce ultricies, libero quis vestibulum lacinia, libero tortor interdum lorem, nec blandit mi magna nec tortor. Aenean convallis iaculis velit vitae lobortis. Sed scelerisque interdum augue ut eleifend. Maecenas accumsan odio placerat suscipit ornare. Pellentesque ut turpis posuere, ultricies eros at, molestie dui...              </Card.Text>
              <Button variant="primary">Read more</Button>
            </Card.Body>
            </Card>

            <Card className='mt-5'>
            <Card.Body>
              <Card.Title>Blog Post 3</Card.Title>
              <Card.Text>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget orci imperdiet, pretium justo ut, pulvinar lorem. Fusce ultricies, libero quis vestibulum lacinia, libero tortor interdum lorem, nec blandit mi magna nec tortor. Aenean convallis iaculis velit vitae lobortis. Sed scelerisque interdum augue ut eleifend. Maecenas accumsan odio placerat suscipit ornare. Pellentesque ut turpis posuere, ultricies eros at, molestie dui...              </Card.Text>
              <Button variant="primary">Read more</Button>
            </Card.Body>
            </Card>

            <Card className='mt-5'>
            <Card.Body>
              <Card.Title>Blog Post 4</Card.Title>
              <Card.Text>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget orci imperdiet, pretium justo ut, pulvinar lorem. Fusce ultricies, libero quis vestibulum lacinia, libero tortor interdum lorem, nec blandit mi magna nec tortor. Aenean convallis iaculis velit vitae lobortis. Sed scelerisque interdum augue ut eleifend. Maecenas accumsan odio placerat suscipit ornare. Pellentesque ut turpis posuere, ultricies eros at, molestie dui...              </Card.Text>
              <Button variant="primary">Read more</Button>
            </Card.Body>
            </Card>

            <Card className='mt-5'>
            <Card.Body>
              <Card.Title>Blog Post 5</Card.Title>
              <Card.Text>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget orci imperdiet, pretium justo ut, pulvinar lorem. Fusce ultricies, libero quis vestibulum lacinia, libero tortor interdum lorem, nec blandit mi magna nec tortor. Aenean convallis iaculis velit vitae lobortis. Sed scelerisque interdum augue ut eleifend. Maecenas accumsan odio placerat suscipit ornare. Pellentesque ut turpis posuere, ultricies eros at, molestie dui...              </Card.Text>
              <Button variant="primary">Read more</Button>
            </Card.Body>
            </Card>

            <Card className='mt-5'>
            <Card.Body>
              <Card.Title>Blog Post 6</Card.Title>
              <Card.Text>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget orci imperdiet, pretium justo ut, pulvinar lorem. Fusce ultricies, libero quis vestibulum lacinia, libero tortor interdum lorem, nec blandit mi magna nec tortor. Aenean convallis iaculis velit vitae lobortis. Sed scelerisque interdum augue ut eleifend. Maecenas accumsan odio placerat suscipit ornare. Pellentesque ut turpis posuere, ultricies eros at, molestie dui...              </Card.Text>
              <Button variant="primary">Read more</Button>
            </Card.Body>
            </Card>


          </Col>
          <Col md="3">
            <h5 className="text-center mt-5">Categories</h5>
            <Card>
             <ListGroup variant="flush">
                <ListGroup.Item>How to...</ListGroup.Item>
                <ListGroup.Item>What if...</ListGroup.Item>
                <ListGroup.Item>Where to...</ListGroup.Item>
                <ListGroup.Item>How much...</ListGroup.Item>
                </ListGroup>
            </Card>
            <Card className="mt-5">
            <Card.Body>
              <Card.Title>P.S.</Card.Title>
              <Card.Text>
                Here you can find some useful information and posts about tourism.
              </Card.Text>
            </Card.Body>
            </Card>
            </Col>
        </Row>
      </Container>
    );
  }
}

