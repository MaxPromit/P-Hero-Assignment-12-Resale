import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const {register, formState: { errors },handleSubmit} = useForm();
    const [loginError, setLoginError] = useState('')

    const handlerLogin = (data) =>{
        console.log(data)
    }
    return (
        <div className="flex justify-center items-center h-screen">
      <div className="w-80">
        <h2 className="text-4xl text-center">Login</h2>
        <form onSubmit={handleSubmit(handlerLogin)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email", { required: "Email Address Required" })}
              type="email"
              className="input input-bordered w-full "
            />
            {errors.email && (
              <p className="text-red-600">{errors.email?.message}</p>
            )}
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              {...register("password", {
                required: "Password Field Required",
                minLength: {
                  value: 6,
                  message: "Password Must Be 6 Charecter Long",
                },
              })}
              type="password"
              className="input input-bordered w-full"
            />
            <label className="label">
              <span className="label-text">Forget Password</span>
            </label>
            {errors.password && (
              <p className="text-red-600">{errors.password?.message}</p>
            )}
            <input
              className="btn btn-accent w-full"
              type="submit"
              value="Login"
            />
            {/* {loginError && <p className="text-red-600">{loginError}</p>} */}
            <p className="text-sm">
              New To Doctor's Portal?{" "}
              <Link className="text-secondary font-semibold" to="/signup">
                Create New Account
              </Link>
            </p>
            <div className="divider">OR</div>
            <button className="btn btn-accent btn-outline w-full">
              CONTINUE WITH GOOGLE
            </button>
          </div>
          
        </form>
      </div>
    </div>
    );
};

export default Login;