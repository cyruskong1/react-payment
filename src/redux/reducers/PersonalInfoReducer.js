const PersonalInfoInitialState = {
  firstName: "",
  lastName: "",
  streetAddress1: "",
  streetAddress2: "",
  city: "",
  state: "",
  zipCode: ""
};

const PersonalInfoReducer = (state = PersonalInfoInitialState, action) => {
  switch (action.type) {
    case "UPDATE_PERSONAL_INFO":
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

export default PersonalInfoReducer;
