import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { SubMenu } from "./SubMenu";
import { Outlet } from "react-router-dom";
// import SplitButton from "react-bootstrap/SplitButton";
// import ButtonGroup from "react-bootstrap/ButtonGroup";
// import Dropdown from "react-bootstrap/Dropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
export const Menu = (props) => {
  return (
    <>
      <Navbar bg="light" expand="lg" className="mb-3">
        <Container fluid>
          <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-start flex-grow-1 pe-3">
                {props.RouteData.map((route) => {
                  return (
                    <SubMenu
                      key={route.to}
                      to={route.to}
                      title={route.title}
                      children={route.children}
                      depth={1}
                    />
                  );
                })}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

      <div className="container">
        <Outlet />
      </div>
    </>
  );
};
