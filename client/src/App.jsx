import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./pages/auth/Register/Register";
import Login from "./pages/auth/Login/Login";
import AuthRoot from "./pages/auth/AuthRoot";

const router = createBrowserRouter([
  {
    path: "/auth",
    element: <AuthRoot />,
    children: [
      { path: "register", element: <Register /> },
      { path: "login", element: <Login /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
