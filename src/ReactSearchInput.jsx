import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Input from "./components/Input";
import Result from "./components/Result";
import "./style.css";

const MIN_AMOUNT_TO_SHOW = 1;

class ReactSearchInput extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      result: props.data,
      resultVisible: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleResultItemClick = this.handleResultItemClick.bind(this);
    this.showResult = this.showResult.bind(this);
    this.hideResult = this.hideResult.bind(this);
    this.updateResultValues = this.updateResultValues.bind(this);
  }

  // eslint-disable-next-line no-unused-vars
  componentDidUpdate(_prevProps, prevState) {
    const { value } = this.state;

    if (value !== prevState.value) {
      // filter dataset and update result list
      this.updateResultValues(value);
    }
  }

  handleChange(e) {
    const inputValue = e.currentTarget.value;
    this.setState({
      value: inputValue
    });
  }

  handleResultItemClick(value) {
    return () => {
      this.setState({ value });
    };
  }

  showResult() {
    this.setState({ resultVisible: true });
  }

  hideResult() {
    setTimeout(() => {
      this.setState({ resultVisible: false });
    }, 150);
  }

  updateResultValues(inputValue) {
    const { data } = this.props;

    const newResult = data.filter(datasetItem => {
      return datasetItem.toUpperCase().includes(inputValue.toUpperCase());
    });

    this.setState({ result: newResult });
  }

  render() {
    const { value, result, resultVisible } = this.state;

    const shouldShowResult =
      resultVisible && result.length >= MIN_AMOUNT_TO_SHOW;

    return (
      <div
        id="react-search-input"
        onFocus={this.showResult}
        onBlur={this.hideResult}
      >
        <Input value={value} onChange={this.handleChange} />
        {shouldShowResult && (
          <Result
            result={result}
            handleResultItemClick={this.handleResultItemClick}
          />
        )}
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
