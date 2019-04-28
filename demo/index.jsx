import React from "react";
import ReactDOM from "react-dom";

import data from "./dataset.json";

import ReactSearchInput from "../src/ReactSearchInput";

ReactDOM.render(
  <ReactSearchInput data={data} />,
  document.getElementById("demo")
);
