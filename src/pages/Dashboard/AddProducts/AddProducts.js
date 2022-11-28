import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";

const AddProducts = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const imageHostKey = process.env.REACT_APP_IMGBB_KEY;
  const navigate = useNavigate()
  const date = new Date();
  const { user } = useContext(AuthContext);
  // console.log(user)
  // console.log(date)

  const { data: catagoryInfo = [] } = useQuery({
    queryKey: ["brandCatagories"],
    queryFn: async () => {
      const res = await fetch("http://localhost:4000/brandCatagories");
      const data = await res.json();
      return data;
    },
  });
  // console.log(catagoryInfo);

  const handlerAddProduct = (data) => {
    console.log(data);
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
        //   console.log(imgData.data.url);

          if (data.productCatagory) {
            const catagoryName = catagoryInfo.filter(
              (catagory) => catagory.brand === data.productCatagory
            );
            const catagoryId = catagoryName[0]._id;
            console.log(catagoryId);

            const catagoryProducts = {
              productName: data.productName,
              picture: imgData.data.url,
              email: user.email,
              location: data.location,
              resalePrice: data.resalePrice,
              originalPrice: data.originalPrice,
              yearsOfUse: data.yearsOfUse,
              postTime: date,
              sellerName: user?.displayName,
              conditionType: data.conditionType,
              mobileNumber: data.mobileNumber,
              productCatagory: data.productCatagory,
              description: data.description,
              status: "Available",
              advertised: 'false',
              catagoryId: catagoryId,
            };
            console.log(catagoryProducts);
            // save the doctors info to the dataBase,,,,
            fetch("http://localhost:4000/catagoriesProducts", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(catagoryProducts),
            })
              .then((res) => res.json())
              .then((result) => {
                if (result.acknowledged) {
                  console.log(result);
                  navigate('/dashboard/myproducts')
                  toast.success(`${data.productName} is added successfully`);
                  
                }
              });
          }
        }
      });
  };
  return (
    <div className="w-80 mx-auto">
      <h3 className="text-3xl font-semibold text-center">Add A Product</h3>
      <form onSubmit={handleSubmit(handlerAddProduct)}>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Product Name</span>
          </label>
          <input
            type="text"
            {...register("productName", {
              required: "Name Field Required",
            })}
            className="input input-bordered w-full "
          />
          {errors.name && <p className="text-red-600">{errors.name.message}</p>}
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            defaultValue={user?.email}
            {...register("email", {
              required: "Email Field Requered",
            })}
            className="input input-bordered w-full "
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Original Price</span>
          </label>
          <input
            type="number"
            {...register("originalPrice", {
              required: "original Field Requered",
            })}
            className="input input-bordered w-full "
          />
        </div>
        <label className="label">
          <span className="label-text">Product Catagory</span>
        </label>
        <select
          {...register("productCatagory", {
            required: "productcatagory Field Required",
          })}
          className="select select-bordered w-full max-w-xs mb-5"
        >
          {catagoryInfo.map((catagory) => (
            <option key={catagory._id}>{catagory.brand}</option>
          ))}
        </select>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Recell Price</span>
          </label>
          <input
            type="number"
            {...register("resalePrice", {
              required: "recell Field Requered",
            })}
            className="input input-bordered w-full "
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Years Of Use</span>
          </label>
          <input
            type="number"
            {...register("yearsOfUse", {
              required: "yearsOfUse Field Requered",
            })}
            className="input input-bordered w-full "
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Mobile Number</span>
          </label>
          <input
            type="number"
            {...register("mobileNumber", {
              required: "mobileNumber Field Requered",
            })}
            className="input input-bordered w-full "
          />
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Location</span>
          </label>
          <select
            className="my-3"
            {...register("location", {
              required: "location Field Required",
            })}
          >
            <option value="Dhaka">Dhaka</option>
            <option value="Chittagong">Chittagong</option>
            <option value="Gopalgonj">Gopalgonj</option>
          </select>
          <label className="label">
            <span className="label-text">Condition Type</span>
          </label>
          <select
            className="my-3"
            {...register("conditionType", { required: true })}
          >
            <option value="Excellent">Excellent</option>
            <option value="Good">Good</option>
            <option value="Fair">Fair</option>
          </select>
          <div className="form-control w-full mb-5">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="file"
              {...register("image", {
                required: "Name Field Required",
              })}
              className="input input-bordered w-full "
            />
            {errors.image && (
              <p className="text-red-600">{errors.image.message}</p>
            )}
          </div>
          <div>
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              className="w-full"
              {...register("description", { required: "Message Needed" })}
            />
          </div>

          <input
            className="btn btn-accent w-full"
            type="submit"
            value="Add Product"
          />
        </div>
      </form>
    </div>
  );
};

export default AddProducts;
