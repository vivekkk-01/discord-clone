import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";

const router = createBrowserRouter([
  { path: "/register", element: <Register /> },
  { path: "/login", element: <Login /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
