import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavDropdownLink } from "./NavDropdownLink";
import { Outlet, Link } from "react-router-dom";
// import SplitButton from "react-bootstrap/SplitButton";
// import ButtonGroup from "react-bootstrap/ButtonGroup";
// import Dropdown from "react-bootstrap/Dropdown";
export const Menu = () => {
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

              <NavDropdownLink />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
