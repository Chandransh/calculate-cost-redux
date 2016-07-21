import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import App from './components/App';
import BillingApp from './containers/BillingApp/BillingApp';
import NotFoundView from './views/NotFoundView';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={BillingApp} />
    <Route path="404" component={NotFoundView} />
    <Redirect from="*" to="404" />
  </Route>
);
