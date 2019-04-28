import React, { PureComponent } from "react";
import Input from "./components/Input";
import Results from "./components/Results";

export default class ReactSearchInput extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.currentTarget.value });
  }

  render() {
    const { value } = this.state;

    return (
      <div id="react-search-input">
        <Input value={value} onChange={this.handleChange} />
        <Results />
      </div>
    );
  }
}
