import React from "react";
import { Link } from "react-router-dom";

const SingleCatagory = ({ catagories }) => {
  return (
    <div className="card w-96 bg-gray-800 text-gray-100 rounded-md shadow-xl">
      <figure>
        <img className="object-fill w-96 h-64"  src={catagories.img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{catagories.brand}</h2>
        <p>{catagories.title}</p>
        <div className="card-actions justify-end">
          <Link to={`/catagory/${catagories._id}`}>
            <button className="btn bg-blue-800 hover:bg-indigo-900 hover:text-white btn-outline btn-sm text-white rounded-md">View</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleCatagory;
