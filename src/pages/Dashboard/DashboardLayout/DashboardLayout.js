import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";
import useAdmin from "../../../Hooks/useAdmin";
import useBuyer from "../../../Hooks/useBuyer";
import useSeller from "../../../Hooks/useSeller";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import './dashboard.css'

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSeller(user?.email);
  const [isBuyer] = useBuyer(user?.email);
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side mr-6">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 text-base-content dashboard">
            <li className="mb-3">
              <Link to='/dashboard'>Dashboard</Link>
            </li>
            {isBuyer && (
              <>
                <li  className="mb-3">
                  <Link to="/dashboard/myorders">My Orders</Link>
                </li>
                <li  className="mb-3">
                  <Link to="/dashboard/mywishlist">My WishList</Link>
                </li>
              </>
            )}
            {isSeller && (
              <>
                <li  className="mb-3">
                  <Link to="/dashboard/addproducts">Add A Products</Link>
                </li>
                <li  className="mb-3">
                  <Link to="/dashboard/myproducts">My Products</Link>
                </li>
              </>
            )}
            {isAdmin && (
              <>
                <li  className="mb-3">
                  <Link to="/dashboard/allsellers">All Sellers</Link>
                </li>
                <li  className="mb-3">
                  <Link to="/dashboard/allbuyers">All Buyers</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default DashboardLayout;
