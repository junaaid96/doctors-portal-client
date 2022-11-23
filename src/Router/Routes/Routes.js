import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import About from "../../Pages/About/About";
import Appointment from "../../Pages/Appointment/Appointment";
import Contact from "../../Pages/Contact/Contact";
import Login from "../../Pages/Login/Login";
import Reviews from "../../Pages/Reviews/Reviews";
import notFound from "../../Assets/images/not_found.png";
import SignUp from "../../Pages/SignUp/SignUp";
import Home from "../../Pages/Home/Home/Home";
import PrivateRoute from "../PrivateRoutes/PrivateRoute";
import Dashboard from "../../Pages/Dashboard/Dashboard";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/appointment",
                element: <Appointment />,
            },
            {
                path: "/reviews",
                element: <Reviews />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/signup",
                element: <SignUp />,
            },
        ],
    },
    {
        path: "/dashboard",
        element: (
            <PrivateRoute>
                <Dashboard></Dashboard>
            </PrivateRoute>
        ),
    },
    {
        path: "*",
        element: (
            <img className="max-h-screen m-auto p-12" src={notFound} alt="" />
        ),
    },
]);

export default router;
