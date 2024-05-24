
import { About_ROUTE, Blog_ROUTE, Blog_pages_ROUTE, ConcatUs_ROUTE, GLAV_ROUTE, Portfolio_ROUTE, Portfolio_pages_ROUTE, Services_ROUTE, Services_pages_ROUTE } from "./utils/consts";
import GlavPages from "./pages/GlavPages";
import About from "./pages/About";
import Blog_pages from "./pages/Blog_pages";
import Blog from "./pages/Blog";
import ConcatUs from "./pages/ConcatUs";
import Portfolio_pages from "./pages/Portfolio_pages";
import Portfolio from "./pages/Portfolio";
import Services_pages from "./pages/Services_pages";
import Services from "./pages/Services";


export const adminRoutes = [


]

export const publicRoutes = [
    {
        path: GLAV_ROUTE,
        Component: GlavPages
    },
    
    {
        path: About_ROUTE,
        Component: About
    },
    {
        path: Blog_pages_ROUTE,
        Component: Blog_pages
    },
    {
        path: Blog_ROUTE,
        Component: Blog
    },
    {
        path: ConcatUs_ROUTE,
        Component: ConcatUs
    },
    {
        path: Portfolio_pages_ROUTE,
        Component: Portfolio_pages
    },
    {
        path: Portfolio_ROUTE,
        Component: Portfolio
    },
    {
        path: Services_pages_ROUTE,
        Component: Services_pages
    },
    {
        path: Services_ROUTE,
        Component: Services
    },

]

