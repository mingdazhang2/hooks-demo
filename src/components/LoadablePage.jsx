import React from "react";
import loadable from "@loadable/component";

const LoadablePage = loadable(
  (props) => import(`../${props.folderName}/${props.page}`),
  {
    fallback: <div>Page is Loading...</div>,
    cacheKey: (props) => props.page,
  }
);
export default LoadablePage;
