export const updatePersonalInfo = data => {
  return {
    type: "UPDATE_PERSONAL_INFO",
    payload: {
      [data.field]: data.value
    }
  };
};

export const submitInfo = data => {
  return {
    type: "SUBMIT_INFO",
    payload: data
  };
};
