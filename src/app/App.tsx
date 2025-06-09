import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

import { Home, Results } from "../presentation/pages";

const routes = [
  {
    path: '/',
    children: [
      {
        index: true,
        element: <Navigate to="/search" />,
      },
      {
        path: '/search',
        element: <Home />,
      },
      {
        path: '/results',
        element: <Results />,
      }
    ],
  },
];

function App() {
  return (
    <RouterProvider router={createBrowserRouter(routes)} />
  );
}

export default App;