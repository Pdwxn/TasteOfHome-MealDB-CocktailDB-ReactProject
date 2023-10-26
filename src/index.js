import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ContentMeal from './pages/ContentMeal'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "meal",
    element: <ContentMeal />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
