import React from "react";
import PropTypes from "prop-types";

import "../../styles/Header.css";

const Header = ({ children }) => (
  <header>
    <img alt="logo" src="/styles/images/afterpay_logo_colour.png" />
  </header>
);

Header.propTypes = {
  className: PropTypes.string,
  children: PropTypes.object
};

Header.defaultProps = {
  className: ""
};

export default Header;
