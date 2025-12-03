import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
], {basename: "/React-Portfolio"});
