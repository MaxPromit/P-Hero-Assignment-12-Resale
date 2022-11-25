import { createBrowserRouter } from "react-router-dom";
import Main from "../../../Layout/Main";
import Blog from "../../Home/Blog/Blog";
import Home from "../../Home/Home";
import ProductCatagories from "../../Home/ProductCatagories/ProductCatagories";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/',
                element: <ProductCatagories></ProductCatagories>,
                // loader: ()=> fetch('http://localhost:4000/catagories'),
            }
        ]
    }
])