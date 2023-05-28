import React, { useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
export const SubMenu = (props) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(false);
  }, []);
  return (
    <>
      {props.children && props.children.length > 0 ? (
        <div className={"depth" + props.depth + " nav-item"}>
          <Nav.Item
            key={props.to}
            className="hasDropdown"
            onClick={() => setShow(!show)}
          >
            <Nav.Link as={Link} to={props.to} onClick={props.handleLinkClick}>
              {props.title}
            </Nav.Link>
            {props.depth === 1 ? <div className="dropdown-toggle"></div> : ""}
          </Nav.Item>

          <div className={show ? "show dropdown" : "dropdown "}>
            {props.children.map((child) => {
              return (
                <div className="subMenu" key={child.to}>
                  <SubMenu
                    handleLinkClick={props.handleLinkClick}
                    to={props.to + "/" + child.to}
                    title={child.title}
                    children={child.children}
                    depth={props.depth + 1}
                  />
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <Nav.Item key={props.to} className={"depth" + props.depth}>
          <Nav.Link as={Link} to={props.to} onClick={props.handleLinkClick}>
            {props.title}
          </Nav.Link>
        </Nav.Item>
      )}
    </>
  );
};
