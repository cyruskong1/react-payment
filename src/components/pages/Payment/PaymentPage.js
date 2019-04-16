import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "../../../../../../../Library/Caches/typescript/3.3/node_modules/redux";

import { Button, Textbox } from "../../pure-components";
import { TextboxTypes, TextboxDefaults } from "../../../types/TextboxTypes";
import { PAYMENT_CONSTANTS } from "../../../constants/payment-constants";
import { REGEX_CC } from "../../../constants/regex_patterns";
import * as PaymentActions from "../../../redux/actions/PaymentActions";
import * as ValidationActions from "../../../redux/actions/ValidationActions";

class Payment extends Component {
  onChange = (event, eventProps) => {
    const { updatePaymentInfo } = this.props.PaymentActions;
    const eventData = {
      [eventProps]: event.target.value
    };
    if (updatePaymentInfo) updatePaymentInfo(eventData);
  };

  onSubmit = event => {
    event.preventDefault();
    alert(event);
  };

  render() {
    const { Payment, UIErrors } = this.props;
    const { ccNumber, ccExpDate, ccCode } = Payment;
    const { CC_NUMBER, CC_EXPDATE, CC_CODE } = PAYMENT_CONSTANTS.CREDIT_CARD;
    const { VISA, SECURITY_CODE } = REGEX_CC;

    return (
      <div>
        <p>Payment</p>
        <form>
          <Textbox
            value={ccNumber}
            placeholder={CC_NUMBER.PLACEHOLDER}
            name={CC_NUMBER.NAME}
            onChange={this.onChange}
            error={UIErrors}
            pattern={VISA}
          />
          <Textbox
            value={ccExpDate}
            placeholder={CC_EXPDATE.PLACEHOLDER}
            name={CC_EXPDATE.NAME}
            onChange={this.onChange}
            error={UIErrors}
          />
          <Textbox
            value={ccCode}
            placeholder={CC_CODE.PLACEHOLDER}
            name={CC_CODE.NAME}
            onChange={this.onChange}
            error={UIErrors}
            pattern={SECURITY_CODE}
          />
          <Button value="submit" />
        </form>
      </div>
    );
  }
}

Payment.propTypes = {
  ccNumber: TextboxTypes,
  ccExpDate: TextboxTypes,
  ccCode: TextboxTypes
};
Payment.DefaultProps = {
  ccNumber: TextboxDefaults,
  ccExpDate: TextboxDefaults,
  ccCode: TextboxDefaults
};

const mapStateToProps = state => {
  return {
    Payment: state.Payment,
    UIErrors: state.UIErrors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch,
    PaymentActions: bindActionCreators(
      Object.assign({}, PaymentActions),
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
)(Payment);
