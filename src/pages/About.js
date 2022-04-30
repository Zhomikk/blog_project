import React, { Component } from "react";
import { Container, Tab, Nav, Row, Col } from "react-bootstrap";


export default class Home extends Component {
    render() {
        return (
            <div>
               <Container>
                   <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-2">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Who are we?</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">What we do?</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">How much?</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">What about eficciency?</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                    <Col sm={9}>
                        <Tab.Content className="mt-3">
                           <Tab.Pane eventKey="first">
                               <img src='https://www.minddigital.com/wp-content/uploads/2020/02/img-who-we-are.png' />
                               <p className="mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                           </Tab.Pane>
                           <Tab.Pane eventKey="second">
                               <img src='https://alchemycreations.co.uk/wp-content/uploads/2016/05/how_we_do2-1.jpg' />
                               <p className="mt-3">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                           </Tab.Pane>
                           <Tab.Pane eventKey="third">
                               <img src='https://www.clipartkey.com/mpngs/m/25-257397_image-result-for-how-much-much-png.png' />
                               <p className="mt-2">lol lol lol lol lol lol lol lol lol lol lol lol</p>
                           </Tab.Pane>
                           <Tab.Pane eventKey="fourth">
                               <img src='https://st2.depositphotos.com/5007459/8566/v/600/depositphotos_85662862-stock-illustration-venn-diagram-template.jpg' />
                               
                           </Tab.Pane>
                        </Tab.Content>
                    </Col>
                    </Row>
                    </Tab.Container>
               </Container>
               
            </div>
        );
    }
}

