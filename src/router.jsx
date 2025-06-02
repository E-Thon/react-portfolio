import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import Loading from "./components/loading/Loading";
import Layout from "./Layout";
import { getProjects } from "./utilities/typicode";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        hydrateFallbackElement: <Loading />,
        children: [
            {
                index: true,
                element: <Home />,
                loader: getProjects,
            }
        ]
    }
])

export default router



