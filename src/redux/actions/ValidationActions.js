export const validatePersonalInfoForm = schema => {
  return dispatch =>
    new Promise(resolve => {
      const errorFields = {};
      for (var key in schema) {
        if (schema[key] === "") {
          errorFields[key] = true;
        }
      }
      dispatch({ type: "VALIDATE_PERSONAL_INFO_FORM", payload: errorFields });
      resolve();
    });
};
