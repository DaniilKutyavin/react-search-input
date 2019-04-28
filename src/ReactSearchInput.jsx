import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Input from "./components/Input";
import Results from "./components/Results";

class ReactSearchInput extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.currentTarget.value });
  }

  render() {

    return (
      <div id="react-search-input">
        <Input value={value} onChange={this.handleChange} />
        <Results />
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
