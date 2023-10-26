import { createBrowserRouter } from "react-router-dom";
import Login from "../screens/login";
import Register from "../screens/register";
export const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <Layout>
//         <Home />
//       </Layout>
//     ),
//   },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  }
]);
