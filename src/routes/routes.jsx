import { createBrowserRouter } from "react-router-dom";
import Mainlayouts from "../layouts/Mainlayouts";
import Home from "../pages/Home";
import Products from "../pages/Products";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DashboardLayout from "../layouts/DashboardLayout";
import Overview from "../pages/Dashboard/Overview";
import PrivateRoute from "./Private-Route/PrivateRoute";
import SellerRoute from "./Private-Route/SellerRoute";
import MyProducts from "../pages/Dashboard/Seller/MyProducts";
import AddProducts from "../pages/Dashboard/Seller/AddProducts";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Mainlayouts></Mainlayouts>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/products',
                element: <Products></Products>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contact-us',
                element: <Contact></Contact>
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },

        ]
    },
    {
        path: "/dashboard",
        element:
            <PrivateRoute>
                <DashboardLayout></DashboardLayout>
            </PrivateRoute>,
        children: [
            {
                path: "/dashboard/overview",
                element: <Overview></Overview>
            },

            // seller Route
            {
                path: "/dashboard/my-products",
                element: <SellerRoute>
                    <MyProducts></MyProducts>
                </SellerRoute>
            },
            {
                path: "/dashboard/add-products",
                element: <SellerRoute>
                    <AddProducts></AddProducts>
                </SellerRoute>
            },

        ]
    }
]);