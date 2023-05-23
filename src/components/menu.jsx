import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Outlet, Link } from "react-router-dom";
import SplitButton from "react-bootstrap/SplitButton";

import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
export const Menu = () => {
  const [show, setShow] = useState(false);
  const showDropdown = (e) => {
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            React Hooks
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Item>
                <Nav.Link as={Link} to="/state-hook">
                  State Hook
                </Nav.Link>
              </Nav.Item>

              <Dropdown
                as={ButtonGroup}
                onMouseEnter={showDropdown}
                onMouseLeave={hideDropdown}
                show={show}
              >
                <Nav.Link as={Link} to="/reducer-hook">
                  Reduce Hook
                </Nav.Link>
                <Dropdown.Toggle
                  split
                  variant=""
                  id="dropdown-split-basic"
                  onClick={() => setShow(!show)}
                />

                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/reducer-hook/counter">
                    Counter
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/reducer-hook/stopwatch">
                    Stopwatch
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/reducer-hook/todos">
                    Todos
                  </Dropdown.Item>
                  <NavDropdown.Divider />
                  <Dropdown.Item as={Link} to="/reducer-hook/form">
                    Form
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
