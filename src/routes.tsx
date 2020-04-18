import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import app from './pages/template/app';
import home from './pages/template/home';

import Dashboard from './pages/Dashboard';

interface IRouter {
  base: string;
  Template: React.ElementType;
  routes: IRoute[]
}

interface IRoute {
  path: string;
  exact?: boolean;
  component: React.ComponentClass | React.FC;
}

const routers: IRouter[] = [
  {
    base: '',
    Template: home,
    routes: [
      {
        path: '/',
        exact: true,
        component: () => <div>Home</div>
      },
      {
        path: '/login',
        component: () => <div>Login</div>
      }
    ]
  },
  {
    base: '/app',
    Template: app,
    routes: [
      {
        path: '/dashboard',
        component: Dashboard
      }
    ]
  }
];

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        {routers.map(({ routes, Template, base }) => 
          routes.map((route, i) => (
            <Route 
              key={i} 
              exact={route.exact || false} 
              path={`${base}${route.path}`}
            >
              <Template>
                <route.component />
              </Template>
            </Route>
          ))
        )}
      </Switch>
    </BrowserRouter>
  );
}
