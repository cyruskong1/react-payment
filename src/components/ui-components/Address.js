import React from "react";
import PropTypes from "prop-types";

import { Textbox } from "../pure-components";

const Address = props => {
  const {
    streetAddress1,
    streetAddress2,
    city,
    state,
    zipCode,
    onChange,
    regex
  } = props;
  return (
    <div>
      <Textbox
        value={streetAddress1.value}
        name={streetAddress1.name}
        placeholder={streetAddress1.placeholder}
        onChange={onChange}
        error={streetAddress1.error}
      />
      <Textbox
        value={streetAddress2.value}
        name={streetAddress2.name}
        placeholder={streetAddress2.placeholder}
        onChange={onChange}
        error={streetAddress2.error}
      />
      <Textbox
        value={city.value}
        name={city.name}
        placeholder={city.placeholder}
        onChange={onChange}
        pattern={city.pattern}
        error={city.error}
      />
      <Textbox
        value={state.value}
        name={state.name}
        placeholder={state.placeholder}
        onChange={onChange}
        error={state.error}
        pattern={state.pattern}
      />
      <Textbox
        value={zipCode.value}
        name={zipCode.name}
        placeholder={zipCode.placeholder}
        onChange={onChange}
        pattern={zipCode.pattern}
        error={zipCode.error}
      />
    </div>
  );
};

export default Address;
