import { RouterProvider } from 'react-router';
import './App.css';

import storageHelper from './utils';

import { loggedInRoutes, notLoggedInRoutes } from './router/router';

export function WrappedApp() {
  const token = storageHelper.getItem('token');

  return token ? (
    <RouterProvider router={loggedInRoutes} />
  ) : (
    <RouterProvider router={notLoggedInRoutes} />
  );
}

function App() {
  return <p>Test</p>;
}

export default App;
