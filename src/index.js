import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider, BrowserRouter } from 'react-router-dom';

// const router = createBrowserRouter([
//   {
//     path: "home",
//     element: <App />,
//   },
// {
//   path: "categories",
//   element: <LoginPage />,
// },
// {
//   path: "recipes",
//   element: <Content />,
// },
// ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
