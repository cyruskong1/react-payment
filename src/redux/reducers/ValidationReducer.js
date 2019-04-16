const ValidationReducer = (state = {}, action) => {
  switch (action.type) {
    case "VALIDATE_PERSONAL_INFO_FORM":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default ValidationReducer;
