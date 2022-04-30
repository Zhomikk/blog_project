import React, { Component, } from 'react';
import {Navbar, Container} from 'react-bootstrap'


export default class Footer extends Component{
    render() {
        return (
            <div>
               <Navbar sticky="bottom" collapseOnSelect expand="md" bg="primary" variation="light">
                        <Container>
                            <Navbar.Brand href="/">
                                How to be a tourist?
                                </Navbar.Brand>
                                </Container>
                                </Navbar> 
            </div>
        );
    }
}

