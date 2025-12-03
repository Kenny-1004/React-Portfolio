import { createBrowserRouter, Link } from "react-router";
import Home from "./Pages/Home.jsx";
import Login from "./Pages/Login.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/login",
        element: (
            <Link to={"/"}>
                <Login />
            </Link>
        ),
    },
], {basename: "/React-Portfolio"});
