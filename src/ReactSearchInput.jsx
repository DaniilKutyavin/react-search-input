import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Input from "./components/Input";
import Result from "./components/Result";

class ReactSearchInput extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      result: props.data
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.currentTarget.value });
  }

  render() {
    const { value, result } = this.state;

    return (
      <div id="react-search-input">
        <Input value={value} onChange={this.handleChange} />
        <Result result={result} />
      </div>
    );
  }
}

ReactSearchInput.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any)
};

ReactSearchInput.defaultProps = {
  data: []
};

export default ReactSearchInput;
