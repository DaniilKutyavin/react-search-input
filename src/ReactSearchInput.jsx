import React, { PureComponent } from "react";
import Input from "./components/Input";
import Results from "./components/Results";

export default class ReactSearchInput extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="react-search-input">
        <Input />
        <Results />
      </div>
    );
  }
}
