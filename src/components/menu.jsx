import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavDropdownLink } from "./NavDropdownLink";
import { Outlet, Link } from "react-router-dom";
// import SplitButton from "react-bootstrap/SplitButton";
// import ButtonGroup from "react-bootstrap/ButtonGroup";
// import Dropdown from "react-bootstrap/Dropdown";
export const Menu = (props) => {
  let deepth = 0;

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
              {props.RouteData.map((route) => {
                return route.ifNavDropdownLink ? (
                  <NavDropdownLink
                    key={route.to}
                    to={route.to}
                    title={route.title}
                    children={route.children}
                    deepth={1}
                  />
                ) : (
                  <Nav.Item key={route.to}>
                    <Nav.Link as={Link} to={route.to}>
                      {route.title}
                    </Nav.Link>
                  </Nav.Item>
                );
              })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};
