import { combineReducers } from "redux";

import PersonalInfo from "./PersonalInfoReducer";
import Payment from "./PaymentReducer";
import UIErrors from "./ValidationReducer";

const rootReducer = combineReducers({
  PersonalInfo,
  Payment,
  UIErrors
});

export default rootReducer;
