import { createBrowserRouter } from "react-router-dom";
import AllCatagory from "../../../Component/AllCatagory/AllCatagory";
import Main from "../../../Layout/Main";
import AddProducts from "../../Dashboard/AddProducts/AddProducts";
import AllBuyers from "../../Dashboard/Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../../Dashboard/Dashboard/AllSellers/AllSellers";
import Dashboard from "../../Dashboard/Dashboard/Dashboard";
import DashboardLayout from "../../Dashboard/DashboardLayout/DashboardLayout";
import MyOrders from "../../Dashboard/MyOrders/MyOrders";
import MyProducts from "../../Dashboard/MyProducts/MyProducts";
import MyWishList from "../../Dashboard/MyWishList/MyWishList";
import Blog from "../../Home/Blog/Blog";
import Home from "../../Home/Home";
import ProductCatagories from "../../Home/ProductCatagories/ProductCatagories";
import Login from "../../Shared/Login/Login";
import SignUp from "../../Shared/Login/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


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
                element: <PrivateRoute><AllCatagory></AllCatagory></PrivateRoute>,
                loader: ({params})=> fetch(`http://localhost:4000/catagory/${params.id}`)
            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/dashboard',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/mywishlist',
                element: <MyWishList></MyWishList>
            },
            {
                path: '/dashboard/addproducts',
                element: <AddProducts></AddProducts>
            },
            {
                path: '/dashboard/myproducts',
                element: <MyProducts></MyProducts>
            },
            {
                path: '/dashboard/allsellers',
                element: <AllSellers></AllSellers>
            },
            {
                path: '/dashboard/allbuyers',
                element: <AllBuyers></AllBuyers>
            },
        ]
    }
])