import React from "react";
import PropTypes from "prop-types";

function ResultListItem(props) {
  return <div className="result-item" {...props} />;
}

export default function Result({ result = [] }) {
  return result.map(resultListItem => (
    <ResultListItem id="result" key={resultListItem}>
      {resultListItem}
    </ResultListItem>
  ));
}

Result.propTypes = {
  result: PropTypes.arrayOf(PropTypes.any).isRequired
};
