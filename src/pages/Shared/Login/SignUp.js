import React, { useState } from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
const SignUp = () => {
  const {register, formState: { errors }, handleSubmit} = useForm();
  const [signInError, setSingInError] = useState('');
  const {createUser, updateUser,googleLogin} = useContext(AuthContext);


  const googleProvider = new GoogleAuthProvider();

  const handlerSignup = (data) => {
    console.log(data);
    setSingInError('')
        createUser(data.email,data.password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            const userInfo = {
                displayName: data.name,
                photoURL : data.photo
            }
            toast.success('User Created Successfully')
            updateUser(userInfo)
            .then(()=>{
              saveUser(data.name, data.email, data.role)
            })
            .catch(err => {
                console.log(err.message)
            })

        })
        .catch(err => {
            setSingInError(err.message)
            console.error(err)})

  };

  const handlerGoogle = () =>{
    googleLogin(googleProvider)
    .then(result =>{
        const user = result.user;
        console.log(user)
    })
    .catch(err=> console.error(err))
  }

  const saveUser = (name, email, role) =>{
    const user = {name, email, role};
    fetch('http://localhost:4000/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
    //   setCreateUserEmail(email)
      console.log(data);
    })
  }


  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-80">
        <h2 className="text-4xl text-center">SignUp</h2>
        <form onSubmit={handleSubmit(handlerSignup)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", {
                required: "Name Field Required",
              })}
              className="input input-bordered w-full "
            />
            {errors.name && (
              <p className="text-red-600">{errors.name.message}</p>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="text"
              {...register("photo", {
                required: "Photo Field Required",
              })}
              className="input input-bordered w-full "
            />
            {errors.photo && (
              <p className="text-red-600">{errors.photo.message}</p>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email Field Requered",
              })}
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password Field Required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 charecter long",
                },
                pattern: {
                  value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                  message:
                    "Password Should Have A Special Charecter, Uppercase And A Number",
                },
              })}
              className="input input-bordered w-full"
            />

            {errors.password && (
              <p className="text-red-600">{errors.password.message}</p>
            )}
           <select className="my-3" {...register("role", {
             required: "Check Field Required"
           })}>
        <option value="Buyer">Buyer</option>
        <option value="Seller">Seller</option>
      </select>
            <input
              className="btn btn-accent w-full"
              type="submit"
              value="SignUp"
            />
            {signInError && <p className='text-red-600'>{signInError}</p>}
            <p className="text-sm">
              Already have an account?
              <Link className="text-secondary font-semibold" to="/login">
                Please Login
              </Link>
            </p>
            <div className="divider">OR</div>
            <button onClick={handlerGoogle} className="btn btn-accent btn-outline w-full">
              CONTINUE WITH GOOGLE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
