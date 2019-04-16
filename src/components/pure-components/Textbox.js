import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import "../../styles/Textbox.css";
import "../../styles/App.css";

class Textbox extends PureComponent {
  onFocus = event => {
    const { onFocus } = this.props;
    if (onFocus) onFocus(event);
  };

  onChange = event => {
    const { name, onChange, pattern } = this.props;
    const targetValue = event.target.value;
    if (pattern) {
      if (targetValue === "" || pattern.test(targetValue)) {
        onChange(event, name);
      }
    } else {
      onChange(event, name);
    }
  };

  onBlur = event => {
    const { onBlur } = this.props;
    if (onBlur) onBlur(event);
  };

  render() {
    const {
      className,
      type,
      name,
      value,
      placeholder,
      id,
      isVisible,
      isDisabled,
      error
    } = this.props;

    if (!isVisible) return null;
    const errorClass = error[name] ? "error" : "";
    return (
      <input
        placeholder={placeholder}
        type={type}
        name={name}
        value={value}
        className={`${className} ${errorClass}`}
        id={id}
        onBlur={this.props.onBlur ? this.onBlur : this.onChange}
        onChange={this.onChange}
        onFocus={this.onFocus}
        disabled={isDisabled}
      />
    );
  }
}

Textbox.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  isVisible: PropTypes.bool,
  isDisabled: PropTypes.bool
};

Textbox.defaultProps = {
  type: "text",
  name: "",
  value: "",
  className: "",
  placeholder: "",
  id: "",
  onBlur() {},
  onChange() {},
  onFocus() {},
  isVisible: true,
  isDisabled: false
};

export default Textbox;
