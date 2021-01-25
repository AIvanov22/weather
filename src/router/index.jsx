import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import paths from './paths';
import { Progress } from '../components/index';

const HomeComponent = React.lazy(() => import('../pages/Home'));
const ResultComponent = React.lazy(() => import('../pages/Result'));

export const RouterComponent = ({ history }) => (
  <Suspense fallback={<Progress />}>
    <Router history={history}>
      <Switch>
        <Route
          exact
          path={paths.root}
          component={HomeComponent}
        />
        <Route
          path={paths.city}
          component={ResultComponent}
        />
      </Switch>
    </Router>
  </Suspense>
);
