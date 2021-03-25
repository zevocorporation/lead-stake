import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Button from "./components/common/Button";
import StakingPage from "./pages/StakingPage";
import StakingPage2 from "./pages/StakingPage2";
//replace stakingPage with Stackingpage2 for ETH Mainnet

const App = () => {
  const [coin, setCoin] = useState(false);

  return (
    <>
      <div style={{ textAlign: "center", marginTop: "1em" }}>
        <Button onClick={() => setCoin(false)} style={{ marginRight: "2em" }}>
          Ethereum
        </Button>
        <Button onClick={() => setCoin(true)}>Bsc</Button>
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
