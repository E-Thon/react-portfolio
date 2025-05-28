import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Loading from "./components/loading/Loading";
import { ErrorBoundary } from "./components/error/ErrorBoundary";
import Layout from "./Layout";
import { handleSubmit } from "./utilities/actions";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        hydrateFallbackElement: <Loading />,
        errorElement: <ErrorBoundary />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "projects",
                element: <Projects />,
            },
            {
                path: "contact",
                element: <Contact />,
                action: handleSubmit,
            },
            {
                path: "*",
                element: <NotFound />
            }
        ]
    }
])

export default router



