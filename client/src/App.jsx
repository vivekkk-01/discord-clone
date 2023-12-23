import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register, {
  loader as registerLoader,
} from "./pages/auth/Register/Register";
import Login, { loader as loginLoader } from "./pages/auth/Login/Login";
import AuthRoot from "./pages/auth/AuthRoot";
import Dashboard, {
  loader as dashboardLoader,
} from "./pages/dashBoard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    loader: dashboardLoader,
  },
  { path: "/dashboard", element: <Dashboard /> },
  {
    path: "/auth",
    element: <AuthRoot />,
    children: [
      { path: "register", element: <Register />, loader: registerLoader },
      { path: "login", element: <Login />, loader: loginLoader },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
