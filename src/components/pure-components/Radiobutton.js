import React, { Component } from "react";
import PropTypes from "prop-types";

const propTypes = {
  isVisible: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  value: PropTypes.string,
  values: PropTypes.array,
  className: PropTypes.string,
  isDisabled: PropTypes.bool,
  selectedValue: PropTypes.string
};

const defaultProps = {
  name: "",
  onChange() {},
  onFocus() {},
  className: "",
  value: "",
  values: [],
  isVisible: true,
  isDisabled: false,
  selectedValue: ""
};

class RadioButton extends Component {
  onChange = event => {
    const { onChange, name } = this.props;
    onChange(event, name);
  };

  onFocus = event => {
    const { onFocus } = this.props;
    onFocus(event);
  };
  render() {
    const { name, id, values, selectedValue, isVisible } = this.props;

    if (!isVisible) return null;
    let hasMatch = false;

    for (let i = 0; i < values.length; i++) {
      if (values[i].key === String(selectedValue)) {
        hasMatch = true;
        break;
      }
    }
    return (
      <div
        onClick={this.onClick}
        onKeyDown={this.onClick}
        aria-checked={false}
        role="radio"
        tabIndex="0"
      >
        {values.map((value, index) => {
          return (
            <label key={`${name} ${index}`} htmlFor={id} id={`${id} ${name}`}>
              {value.value}
              <input
                type="radio"
                name={name}
                id={id}
                value={String(value.key)}
                onChange={this.onChange}
                onFocus={this.onFocus}
              />
            </label>
          );
        })}
      </div>
    );
  }
}

RadioButton.propTypes = propTypes;
RadioButton.defaultProps = defaultProps;

export default RadioButton;
