import React, { useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
export const SubMenu = (props) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [showSubMenu, setShowSubMenu] = useState(props.showSubMenu);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (windowWidth > 991) {
        setShowSubMenu(false);
        console.log("change width", windowWidth);
      }
    };
    const debouncedHandleResize = debounce(handleResize, 10);
    if (props.depth === 1) {
      window.addEventListener("resize", debouncedHandleResize, false);
    }
    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  }, [props.depth, windowWidth]);

  function debounce(fn, ms) {
    let timer;
    return (_) => {
      clearTimeout(timer);
      timer = setTimeout((_) => {
        timer = null;
        fn.apply(this, arguments);
      }, ms);
    };
  }
  return (
    <>
      {props.children && props.children.length > 0 ? (
        <div className={"depth" + props.depth + " nav-item"}>
          <Nav.Item
            key={props.to}
            className="hasDropdown"
            onClick={() => {
              if (windowWidth <= 991) {
                setShowSubMenu(!showSubMenu);
              }
            }}
          >
            <Nav.Link as={Link} to={props.to} onClick={props.handleLinkClick}>
              {props.title}
            </Nav.Link>
            {props.depth === 1 ? <div className="dropdown-toggle"></div> : ""}
          </Nav.Item>

          <div className={showSubMenu ? "show dropdown" : "dropdown "}>
            {props.children.map((child) => {
              return (
                <div className="subMenu" key={child.to}>
                  <SubMenu
                    handleLinkClick={() => {
                      props.handleLinkClick();
                      props.closeOtherSubmenus(); // Call the closeOtherSubmenus callback
                    }}
                    to={props.to + "/" + child.to}
                    title={child.title}
                    children={child.children}
                    depth={props.depth + 1}
                    // showSubMenu={false}
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
