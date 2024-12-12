import { createBrowserRouter } from "react-router-dom";
import Mainlayouts from "../layouts/Mainlayouts";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Mainlayouts></Mainlayouts>
    },
]);