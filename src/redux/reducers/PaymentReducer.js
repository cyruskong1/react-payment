const PaymentInitialState = {
  ccNumber: "",
  ccExpDate: "",
  ccCode: ""
};

const PaymentReducer = (state = PaymentInitialState, action) => {
  switch (action.type) {
    case "UPDATE_PAYMENT_INFO":
      return {
        ...state,
        ...action.payload
      };

    case "SUBMIT_INFO":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default PaymentReducer;
