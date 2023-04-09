import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Home2 from './pages/Home2';
import NotFound from './pages/NotFound'

import First from './components/First'
import Second from './components/Second'
import Third from './components/Third'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <First /> },
      { path: "second", element: <Second /> },
      { path: "third", element: <Third /> },
    ],
  },
  {
    path: "/app2",
    element: <Home2 />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <First /> },
      { path: "second", element: <Second /> },
      { path: "third", element: <Third /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
