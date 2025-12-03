import { createBrowserRouter, Link } from "react-router";
import Home from "./Pages/Home.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
], {basename: "/React-Portfolio"});
