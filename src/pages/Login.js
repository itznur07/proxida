import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
   <Navigation />
    <div className='max-w-md mx-auto bg-[#f5f5f5] p-8 rounded-md shadow-md mt-28'>
      <h2 className='text-2xl font-bold mb-4'>Log in</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-4'>
          <label className='block font-bold mb-2' htmlFor='email'>
            Email
          </label>
          <input
            className='w-full border rounded-md py-2 px-3'
            type='email'
            id='email'
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <p className='text-red-500 text-sm mt-1'>{errors.email.message}</p>
          )}
        </div>

        <div className='mb-4'>
          <label className='block font-bold mb-2' htmlFor='password'>
            Password
          </label>
          <input
            className='w-full border rounded-md py-2 px-3'
            type='password'
            id='password'
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password should be at least 8 characters",
              },
            })}
          />
          {errors.password && (
            <p className='text-red-500 text-sm mt-1'>
              {errors.password.message}
            </p>
          )}
        </div>
        <div className='my-5 flex justify-center'>
          <button className='bg-blue-500 hover:bg-blue-300 w-full py-3.5 text-xl font-bold text-white rounded'>
            Login
          </button>
        </div>
        <div>
          <p className='text-md font-medium my-2 text-slate-500'>
            already logged?{" "}
            <Link to='/signup' className='text-xl font-bold text-blue-400'>
              Sign up
            </Link>
          </p>
        </div>
      </form>
    </div>
    </>
  );
}

export default Login;
