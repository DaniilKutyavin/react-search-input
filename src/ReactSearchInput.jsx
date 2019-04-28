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
    this.handleResultItemClick = this.handleResultItemClick.bind(this);
  }

  // eslint-disable-next-line no-unused-vars
  componentDidUpdate(_prevProps, prevState) {
    const { value } = this.state;

    if (value !== prevState.value) {
      // filter dataset and update result list
      const { data } = this.props;
      const newResult = data.filter(datasetItem =>
        datasetItem.toLowerCase().includes(value.toLowerCase())
      );

      // TODO figure out, how to remove this one
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ result: newResult });
    }
  }

  handleChange(e) {
    const inputValue = e.currentTarget.value;
    this.setState({
      value: inputValue
    });
  }

  handleResultItemClick(value) {
    return function handleClick() {
      this.setState({ value });
    }.bind(this);
  }

  render() {
    const { value, result } = this.state;

    return (
      <div id="react-search-input">
        <Input value={value} onChange={this.handleChange} />
        <Result
          result={result}
          handleResultItemClick={this.handleResultItemClick}
        />
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
