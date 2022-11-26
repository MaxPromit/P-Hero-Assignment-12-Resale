import { createBrowserRouter } from "react-router-dom";
import AllCatagory from "../../../Component/AllCatagory/AllCatagory";
import Main from "../../../Layout/Main";
import Dashboard from "../../Dashboard/Dashboard/Dashboard";
import Blog from "../../Home/Blog/Blog";
import Home from "../../Home/Home";
import ProductCatagories from "../../Home/ProductCatagories/ProductCatagories";
import Login from "../../Shared/Login/Login";
import SignUp from "../../Shared/Login/SignUp";


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
                element: <ProductCatagories></ProductCatagories>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/catagory/:id',
                element: <AllCatagory></AllCatagory>,
                loader: ({params})=> fetch(`http://localhost:4000/catagory/${params.id}`)
            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            }
        ]
    }
])