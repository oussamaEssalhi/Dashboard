import { Footer, NavBar, SideBar } from "./components/index";
import {
  Home,
  Login,
  Product,
  User,
  Users,
  SingleProduct,
  NotFound,
} from "./pages/index";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./style/globalStyle.css";
const Layout = () => {
  return (
    <div className="main">
      <NavBar />
      <div className="container">
        <div className="sidebar-container">
          <SideBar />
        </div>
        <div className="content-container">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};
function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Layout />,
        children: [
          { path: "/", element: <Home /> },
          {
            path: "/users",
            element: <Users />,
          },

          {
            path: "/products",
            element: <Product />,
          },
          {
            path: "/users/:id",
            element: <User />,
          },
          {
            path: "/products/:id",
            element: <SingleProduct />,
          },
        ],
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
    {
      basename: "/dashboard",
    }
  );
  return <RouterProvider router={router} />;
}

export default App;
