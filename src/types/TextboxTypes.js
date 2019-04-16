import PropTypes from "prop-types";

const { shape, string, oneOfType, number, func } = PropTypes;

const TextboxTypes = shape({
  value: oneOfType([string, number]),
  name: string,
  placeholder: string,
  onChange: func,
  pattern: string,
  error: string
});

const TextboxDefaults = {
  value: "",
  name: "",
  placeholder: "",
  onChange() {},
  pattern: "",
  error: ""
};

export { TextboxTypes, TextboxDefaults };
