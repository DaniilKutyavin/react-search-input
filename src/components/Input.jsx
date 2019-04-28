import React from "react";
import PropTypes from "prop-types";

export default function Input({ value = "", onChange }) {
  return <input value={value} onChange={onChange} />;
}

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};
