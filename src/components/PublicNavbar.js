import {Button, Container, Nav, Navbar} from "react-bootstrap";
import React from "react";
import {NavbarDataForAdmin} from "./NavbarData";
import {logout, username} from "./service";

const navbarColor = {backgroundColor: '#445fb7'};
const navbarLink = {color:'white'};

export function AdminNavbar() {

    return (
        <>
            <Navbar style={navbarColor} expand="lg">
                <Container>
                    <Navbar.Brand href="/">{username()}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {NavbarDataForAdmin.map((item) => (
                                <Nav.Link key={item.path} className="nav-link-custom" href={item.path}>
                                    {item.title}
                                </Nav.Link>
                            ))}
                            <Nav.Link className="nav-link-custom" onClick={logout}>
                                Logout
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <br />
        </>
    );
}
