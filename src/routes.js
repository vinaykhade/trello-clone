import React from 'react';
import { Switch, Route , BrowserRouter} from 'react-router-dom';

import App from './components/App';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={() => <App />} />
    </Switch>
  </BrowserRouter>
  );
  
  export default Routes;