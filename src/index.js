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
    path: "meal/:id",
    element: <ContentMeal />,
  },
  {
    path: "Recipes",
    element: <ContentMeal />,
  },
  {
    path: "Categories",
    element: <ContentMeal />,
  },
  {
    path: "Cocktails",
    element: <ContentMeal />,
  },
  {
    path: "Contact",
    element: <ContentMeal />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
