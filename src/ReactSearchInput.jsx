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
    const inputValue = e.currentTarget.value;
    const { data } = this.props;
    const newResult = data.filter(datasetItem =>
      datasetItem.toLowerCase().includes(inputValue.toLowerCase())
    );

    this.setState({
      value: inputValue,
      result: newResult
    });
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
