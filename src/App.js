

import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/Home";
import OverviewPage from "./pages/Overview";

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
    </Switch>
 </div>
  );
}

export default App;
