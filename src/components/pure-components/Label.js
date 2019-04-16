import React, { Component } from "react";
import PropTypes from "prop-types";

class Label extends Component {
  render() {
    const { htmlFor, className, value } = this.props;
    return (
      <label className={className} htmlFor={htmlFor}>
        {value}
      </label>
    );
  }
}

Label.defaultProps = {
  htmlFor: "",
  value: "",
  className: "",
  isVisible: true
};

Label.propTypes = {
  htmlFor: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
  isVisible: PropTypes.bool
};

export default Label;
