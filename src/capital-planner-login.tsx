import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import { App } from "./app";
import './styles/index.css'

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  errorBoundary(err, info, props) {
    return null;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
