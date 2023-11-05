import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Login from "../screens/login";
import Register from "../screens/register";
import Home from "../screens/home";
import AppointmentPage from "../screens/appointmentPage";
export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/appointment",
    element: (
      <Layout>
        <AppointmentPage />
      </Layout>
    ),
  },
]);
