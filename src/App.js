import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import StakingPage from "./pages/StakingPage";
import StakingPage2 from "./pages/StakingPage2";
//replace stakingPage with Stackingpage2 for ETH Mainnet

const App = () => {
  const [coin, setCoin] = useState(false);

  return (
    <>
      <div style={{ textAlign: "center", marginTop: "1em" }}>
        <span onClick={() => setCoin(false)} style={{ marginRight: "2em" }}>
          Ethereum
        </span>
        <span onClick={() => setCoin(true)}>Bsc</span>
      </div>
      <Switch>
        <Route path="/" exact>
          {coin ? <StakingPage /> : <StakingPage2 />}
        </Route>
      </Switch>
    </>
  );
};

export default App;
