import React from "react";
import PropTypes from "prop-types";

function ResultListItem({ value, handleResultItemClick, index }) {
  return (
    // TODO
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div
      className="result-item"
      // TODO
      // eslint-disable-next-line jsx-a11y/role-has-required-aria-props
      role="option"
      tabIndex={index}
      onClick={handleResultItemClick(value)}
    >
      {value}
    </div>
  );
}

export default function Result({ result = [], handleResultItemClick }) {
  return result.map((resultListItem, index) => (
    <ResultListItem
      id="result"
      key={resultListItem}
      handleResultItemClick={handleResultItemClick}
      value={resultListItem}
      index={index}
    />
  ));
}

Result.propTypes = {
  result: PropTypes.arrayOf(PropTypes.any).isRequired
};

ResultListItem.propTypes = {
  value: PropTypes.string.isRequired,
  handleResultItemClick: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired
};
