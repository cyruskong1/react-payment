import React, { Component } from "react";
import PropTypes from "prop-types";

import "../../styles/Button.css";

class Button extends Component {
  onClick = event => {
    const { onClick, name } = this.props;
    onClick(event, name);
  };

  render() {
    const {
      className,
      id,
      type,
      name,
      isVisible,
      disabled,
      value
    } = this.props;

    if (!isVisible) return null;
    return (
      <button
        className={className}
        onClick={this.onClick}
        id={id}
        type={type}
        name={name}
        disabled={disabled}
      >
        <span>{value}</span>
      </button>
    );
  }
}

Button.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  isVisible: PropTypes.bool,
  name: PropTypes.string,
  onClick: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  type: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.oneOfType([PropTypes.oneOf(["disabled"]), PropTypes.bool])
};

Button.defaultProps = {
  className: "",
  id: "",
  isVisible: true,
  name: "",
  onClick() {},
  type: "button",
  value: "",
  disabled: false
};

export default Button;
