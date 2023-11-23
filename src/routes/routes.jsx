import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Login from "../screens/login";
import Register from "../screens/register";
import Home from "../screens/home";
import AppointmentPage from "../screens/appointmentPage";
import ViewAppointments from "../screens/admin/viewAppointments";
import AddService from "../screens/admin/addService";
import ContactUs from "../screens/ContactUs";

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
  {
    path: "/admin",
    element: <ViewAppointments />,
  },
  {
    path: "/addService",
    element: <AddService />,
  },
  {
    path: "/contact-us",
    element: (
      <Layout>
        <ContactUs />
      </Layout>
    ),
  },
]);
