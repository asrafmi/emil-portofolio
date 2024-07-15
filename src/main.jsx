import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.scss';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>Not Found</div>,
    children: [
      {
        path: '/contact',
        element: <div>Contact</div>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
