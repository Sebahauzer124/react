import { createBrowserRouter } from "react-router-dom";
import {Category, Home} from "../pages";
import { MainLayout } from "../layout";

const routes = [
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                path: "/",
                element: <Home/>
            
            },
            {
                path: "/category/:categoryId",
                element: <Category/>
            
            }
        ]

    
    }
];

export const router = createBrowserRouter(routes);
