import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import { Home } from "../presentation/pages";

const routes = [
  {
    path: '/',
    children: [
      {
        index: true,
        element: <Navigate to="/characters" />,
      },
      {
        path: '/characters',
        element: <Home />,
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