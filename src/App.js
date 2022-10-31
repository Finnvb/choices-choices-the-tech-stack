

import { Route, Switch, Routes, useParams } from "react-router-dom";

import HomePage from "./pages/Home";
import OverviewPage from "./pages/Overview";
import UidPage from "./pages/Uid";

function App() {
  return (
 <div>
    <Switch>
      <Route path='/' exact>
        <HomePage/>
      </Route>
      <Route path='/overview'>
        <OverviewPage/>
      </Route>
      <Route path='/:uid'>
        <UidPage/>
      </Route>
    </Switch>
 </div>
  );
}

export default App;
