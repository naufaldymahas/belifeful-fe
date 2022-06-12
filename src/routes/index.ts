import React from 'react';

const App = React.lazy(() => import('../App'));
const Register = React.lazy(() => import('@pages/Register/Register'));
const Login = React.lazy(() => import('@pages/Login/Login'));

interface IRoutes {
  path: string;
  element: React.LazyExoticComponent<() => JSX.Element>;
  children?: IRoutes[];
}

export const Routes: IRoutes[] = [
  {
    path: '/',
    element: App,
  },
  {
    path: '/register',
    element: Register,
  },
  { path: '/login', element: Login },
];
