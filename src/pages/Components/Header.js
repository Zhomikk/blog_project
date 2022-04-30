import React, { Component } from "react";
import logo from "./logo.png";
import { Container, Nav, Navbar, NavbarBrand, Button } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from '../Home';
import About from '../About';
import Blog from '../Blog';

export default class Header extends Component {
    render() {
        return (
            <>
                <div>
                    <Navbar sticky="top" collapseOnSelect expand="md" bg="light" variation="light">
                        <Container>
                            <Navbar.Brand href="/">
                                <img
                                    src={logo}
                                    height="30"
                                    width="35"
                                    className="d-inline-block align-top"
                                    alt="Logo"
                                />
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link href="/">Home</Nav.Link>
                                    <Nav.Link href="/blog">Blog</Nav.Link>
                                    <Nav.Link href="/about">About Us</Nav.Link>
                                </Nav>

                            </Navbar.Collapse>
                        </Container>
                    </Navbar>

                    <Router>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/blog" element={<Blog />} />
                            <Route path="/About" element={<About />} />
                        </Routes>
                    </Router>
                </div>
            </>
        );
    }
}