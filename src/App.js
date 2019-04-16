import React from "react";
import { Route, Switch } from "react-router-dom";

import PersonalInfo from "./components/pages/PersonalInfo/PersonalInfoPage";
import Payment from "./components/pages/Payment/PaymentPage";
import { Header } from "./components/pure-components";
import PageNotFound from "./components/pages/PageNotFound/PageNotFound";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={PersonalInfo} />
        <Route path="/personal-info" component={PersonalInfo} />
        <Route path="/payment" component={Payment} />
      </Switch>
    </div>
  );
}

export default App;
