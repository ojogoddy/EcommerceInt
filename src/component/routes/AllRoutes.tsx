import { createBrowserRouter } from "react-router-dom";
import WebLayout from "../layout/WebLayout";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Contact from "../pages/Contact";
import Cart from "../pages/Cart";

export const Index = createBrowserRouter([
    {
        path: "/",
        element: <WebLayout/>,
        children: [
            {
                index: true,
                element: <Home/>

            },
            {
                path: "shop",
                element: <Shop/>
            },
            {
                path: "contact",
                element: <Contact/>
            },
            {
                path: "cart",
                element: <Cart/>
            },
        ]
    },
    
])