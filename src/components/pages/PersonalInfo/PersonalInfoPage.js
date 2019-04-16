import React, { Component } from "react";
import { connect } from "react-redux";

import { Address } from "../../ui-components";
import { Button, Textbox } from "../../pure-components";
import { TextboxTypes, TextboxDefaults } from "../../../types";
import {
  REGEX_NAME,
  REGEX_STATE,
  REGEX_ZIPCODE
} from "../../../constants/regex_patterns";
import * as PersonalInfoActions from "../../../redux/actions/PersonalInfoActions";
import * as ValidationActions from "../../../redux/actions/ValidationActions";
import { PERSONAL_INFO_CONSTANTS } from "../../../constants/personal-info-contants";
import { bindActionCreators } from "../../../../../../../Library/Caches/typescript/3.3/node_modules/redux";

class PersonalInfo extends Component {
  onChange = (event, eventProps) => {
    event.preventDefault();
    const { updatePersonalInfo } = this.props.PersonalInfoActions;
    const eventData = {
      field: eventProps,
      value: event.target.value
    };
    if (updatePersonalInfo) updatePersonalInfo(eventData);
  };

  onSubmit = event => {
    event.preventDefault();
    const { validatePersonalInfoForm } = this.props.ValidationActions;
    validatePersonalInfoForm(this.props.PersonalInfo);
  };

  render() {
    const { PersonalInfo, UIErrors } = this.props;
    const {
      firstName,
      lastName,
      streetAddress1,
      streetAddress2,
      city,
      state,
      zipCode
    } = PersonalInfo;

    const {
      FIRSTNAME,
      LASTNAME,
      STREETADDRESS1,
      STREETADDRESS2,
      CITY,
      STATE,
      ZIPCODE
    } = PERSONAL_INFO_CONSTANTS;

    return (
      <div>
        <p>Personal Info</p>
        <form id="PersonalInfo">
          <Textbox
            value={firstName}
            name={FIRSTNAME.NAME}
            placeholder={FIRSTNAME.PLACEHOLDER}
            onChange={this.onChange}
            pattern={REGEX_NAME}
            error={UIErrors}
          />
          <Textbox
            value={lastName}
            name={LASTNAME.NAME}
            placeholder={LASTNAME.PLACEHOLDER}
            onChange={this.onChange}
            pattern={REGEX_NAME}
            error={UIErrors}
          />
          <Address
            streetAddress1={{
              value: streetAddress1,
              name: STREETADDRESS1.NAME,
              placeholder: STREETADDRESS1.PLACEHOLDER,
              onChange: this.onChange,
              error: UIErrors
            }}
            streetAddress2={{
              value: streetAddress2,
              name: STREETADDRESS2.NAME,
              placeholder: STREETADDRESS2.PLACEHOLDER,
              onChange: this.onChange,
              error: UIErrors
            }}
            city={{
              value: city,
              name: CITY.NAME,
              placeholder: CITY.PLACEHOLDER,
              onChange: this.onChange,
              error: UIErrors
            }}
            state={{
              value: state,
              name: STATE.NAME,
              placeholder: STATE.PLACEHOLDER,
              onChange: this.onChange,
              error: UIErrors,
              pattern: REGEX_STATE
            }}
            zipCode={{
              value: zipCode,
              name: ZIPCODE.NAME,
              placeholder: ZIPCODE.PLACEHOLDER,
              onChange: this.onChange,
              error: UIErrors,
              pattern: REGEX_ZIPCODE
            }}
            onChange={this.onChange}
          />
          <Button
            value="continue"
            onClick={this.onSubmit}
            htmlFor={"PersonalInfo"}
          />
        </form>
      </div>
    );
  }
}

PersonalInfo.propTypes = {
  firstName: TextboxTypes,
  lastName: TextboxTypes,
  streetAddress1: TextboxTypes,
  streetAddress2: TextboxTypes,
  city: TextboxTypes,
  state: TextboxTypes,
  zipCode: TextboxTypes
};
PersonalInfo.defaultProps = {
  firstName: TextboxDefaults,
  lastName: TextboxDefaults,
  streetAddress1: TextboxDefaults,
  streetAddress2: TextboxDefaults,
  city: TextboxDefaults,
  state: TextboxDefaults,
  zipCode: TextboxDefaults
};

const mapStateToProps = state => {
  return {
    PersonalInfo: state.PersonalInfo,
    UIErrors: state.UIErrors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch,
    PersonalInfoActions: bindActionCreators(
      Object.assign({}, PersonalInfoActions),
      dispatch
    ),
    ValidationActions: bindActionCreators(
      Object.assign({}, ValidationActions),
      dispatch
    )
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PersonalInfo);
