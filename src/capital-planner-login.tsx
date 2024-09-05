import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import { Login } from "./login";
import './styles/index.css'

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent:Login,
  errorBoundary(err, info, props) {
    return null;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
