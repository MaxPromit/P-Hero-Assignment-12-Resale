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
import Payment from "../../Dashboard/Payment/Payment";
import Blog from "../../Home/Blog/Blog";
import Home from "../../Home/Home";
import ProductCatagories from "../../Home/ProductCatagories/ProductCatagories";
import DisplayError from "../../Shared/DisplayError/DisplayError";
import Login from "../../Shared/Login/Login";
import SignUp from "../../Shared/Login/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import BuyerRoute from "../BuyerRoute/BuyerRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SellerRoute from "../SellerRoute/SellerRoute";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
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
                loader: ({params})=> fetch(`https://reseal-bike-server.vercel.app/catagory/${params.id}`)
            },
            
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/myorders',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/mywishlist',
                element: <BuyerRoute><MyWishList></MyWishList></BuyerRoute>
            },
            {
                path: '/dashboard/addproducts',
                element: <SellerRoute><AddProducts></AddProducts></SellerRoute>
            },
            {
                path: '/dashboard/myproducts',
                element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
            },
            {
                path: '/dashboard/allsellers',
                element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
            },
            {
                path: '/dashboard/allbuyers',
                element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({params})=> fetch(`https://reseal-bike-server.vercel.app/bookings/${params.id}`)
            },
        ]
    }
])