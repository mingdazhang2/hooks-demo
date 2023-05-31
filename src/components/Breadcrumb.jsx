import React from "react";
import { Link, useLocation } from "react-router-dom";
export const Breadcrumb = ({ RouteData }) => {
  let currentPath = useLocation().pathname;

  currentPath = currentPath.replace(/\/+$/, "").substring(1);
  const parentPageLinks = currentPath
    ? currentPath.split("/")
    : [{ to: "/", title: "Home", status: "" }];
  // console.log("parentPages", parentPageLinks);

  function GetBreadcrumbArray(RouteData) {
    let breadcrumbArray = [{ to: "/", title: "Home", status: "" }];
    let parentPath = "/";
    if (parentPageLinks.length > 0) {
      for (let i = 0; i < parentPageLinks.length; i++) {
        let foundObj = RouteData.find(
          (route) => route.to === parentPageLinks[i]
        );
        if (foundObj) {
          const foundObjCopy = {
            ...foundObj,
            to: parentPath + foundObj.to,
          };
          if (i === parentPageLinks.length - 1) {
            foundObjCopy.status = "active";
            parentPath = parentPath + foundObj.to;
            breadcrumbArray.push(foundObjCopy);
            break;
          } else if (foundObj.children && foundObj.children.length > 0) {
            parentPath = parentPath + foundObj.to + "/";
            RouteData = foundObj.children;
            // console.log("expectedPage", foundObj);
            breadcrumbArray.push(foundObjCopy);
            continue;
          } else {
            //  console.log("Last expectedPage", foundObj);
            foundObjCopy.status = "active";
            parentPath = parentPath + foundObj.to;
            breadcrumbArray.push(foundObjCopy);
          }
        } else {
          breadcrumbArray = [{ to: "/", title: "", status: "active" }];
          console.log("Not found", breadcrumbArray);
          break;
        }
      }
    }
    return breadcrumbArray;
  }

  const breadcrumbArray = GetBreadcrumbArray(RouteData);
  return (
    <div className="breadcrumb">
      {breadcrumbArray.map((breadcrumb) => {
        return breadcrumb.status === "active" ? (
          <span key={breadcrumb.to}>{breadcrumb.title}</span>
        ) : (
          <div className="breadcrumbLinkWrapper" key={breadcrumb.to}>
            <Link to={breadcrumb.to} className="breadcrumbLink">
              {breadcrumb.title}
            </Link>
          </div>
        );
      })}
    </div>
  );
};
