import React from 'react';

const App = React.lazy(() => import('../App'));
const Register = React.lazy(() => import('@pages/Register/Register'));
const Login = React.lazy(() => import('@pages/Login/Login'));
const Cart = React.lazy(() => import('@pages/Cart/Cart'));
const CartDetail = React.lazy(() => import('@pages/Cart/CartDetail/CartDetail'));
const ECourseDetail = React.lazy(() => import('@pages/ECourse/ECourseDetail'));
const PageNotFound = React.lazy(() => import('@pages/PageNotFound'));

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
  { path: '/cart', element: Cart },
  { path: '/cart/detail', element: CartDetail },
  { path: '/ecourse/detail', element: ECourseDetail },
  { path: '*', element: PageNotFound },
];
