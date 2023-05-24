import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavDropdownLink } from "./NavDropdownLink";
import { Outlet, Link } from "react-router-dom";
// import SplitButton from "react-bootstrap/SplitButton";
// import ButtonGroup from "react-bootstrap/ButtonGroup";
// import Dropdown from "react-bootstrap/Dropdown";
export const Menu = () => {
  const stateHooksMenuItems = [
    {
      path: "/useState",
      title: "useState",
    },
    {
      path: "/useReducer",
      title: "useReducer",
      children: [
        {
          path: "/counter",
          title: "counter",
        },
        {
          path: "/stopwatch",
          title: "stopwatch",
        },
        {
          path: "/todos",
          title: "todos",
        },
        {
          path: "/form",
          title: "form",
        },
      ],
    },
  ];

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
              <NavDropdownLink
                to="/state-hook"
                title="State Hooks"
                subMenuItems={stateHooksMenuItems}
              />
              {/* <NavDropdownLink to="/reducer-hook" title="Reduce Hooks" /> */}
              <Nav.Item>
                <Nav.Link as={Link} to="/ref-hook">
                  Ref Hooks
                </Nav.Link>
              </Nav.Item>
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
