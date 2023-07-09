import { createBrowserRouter, Link } from 'react-router-dom';
import Login from '../views/Login';
import Signup from '../views/Signup';

const notFound = { path: '*', element: <div>Not found uwu</div> };

export const loggedInRoutes = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <h1>Home</h1>
        <Link to='/about'>About Us</Link>
      </div>
    ),
  },
  {
    path: 'about',
    element: (
      <div>
        <p> About us </p>
        <Link to='/'>To home</Link>
      </div>
    ),
  },
  notFound,
]);

export const notLoggedInRoutes = createBrowserRouter([
  {
    path: 'login',
    element: Login(),
  },
  {
    path: 'signup',
    element: Signup(),
  },
  notFound,
]);
