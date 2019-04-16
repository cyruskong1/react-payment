export const updatePaymentInfo = data => {
  if (data.hasOwnProperty("ccNumber")) {
    const length = data.ccNumber.length;
    if (length === 4 || length === 9 || length === 14) {
      data["ccNumber"] += " ";
    }
  }

  if (data.hasOwnProperty("ccExpDate")) {
    const length = data.ccExpDate.length;
    console.log(typeof data.ccExpDate);
    if (length === 2) {
      data.ccExpDate += "/";
    }
    if (length >= 8) {
      return {
        type: "UPDATE_PAYMENT_INFO",
        payload: data.ccExpDate[data.ccExpDate.length - 2]
      };
    }
  }
  return {
    type: "UPDATE_PAYMENT_INFO",
    payload: data
  };
};

export const submitPayment = data => {
  return {
    type: "SUBMIT_PAYMENT",
    payload: data
  };
};
