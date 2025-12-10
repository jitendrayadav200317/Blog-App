import React from "react";
import { motion } from "motion/react";
import { Button } from "@mantine/core";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../redux/slice/authSlice";
import { Link } from "react-router-dom";

// const registerSchema = z.object({
//   email:z
//   .string()
//   .min({message:"this is has to be email"})
//   .email('this is valid email'),
//   password : z
//   .string()
// })

function Register() {
  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.auth);

  const { register, handleSubmit } = useForm({
    // resolver:zodResolver(registerSchema)
  });
  const onSubmit = (data) => {
    dispatch(registerUser(data));
    console.log(data);
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.3 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-150"
      >
        <h1 className="text-2xl font-bold mb-4">Sing Up</h1>
        <form className="space-y-6 w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-2">

            <input
              type="text"
              placeholder="Enter Email..."
              className="focus:outline-none border-b w-full border-gray-200 "
              {...register("name")}
            />
          </div>

          <div className="flex gap-2">

            <input
              type="email"
              placeholder="Enter Email..."
              className="focus:outline-none border-b w-full border-gray-200 "
              {...register("email")}
            />
            {/* {errors.email && <p> {errors.email.message} </p>} */}
          </div>

          <div className="flex gap-2">
            <input
              type="password"
              placeholder="Enter Pass..."
              className="focus:outline-none border-b w-full border-gray-200"
              {...register("password")}
            />
          </div>
          <div className="flex gap-2">
            <input
              type="password"
              placeholder="confram Pass..."
              className="focus:outline-none border-b w-full border-gray-200"
              {...register("conframPassword")}
            />
          </div>

          <Button type="submit" color="#6f6af8" >
            {loading ? <Loader size={20} color="white" /> : "Register"}
          </Button>
          <p className=" text-gray-800">
            Already have an account?
            <Link to="/login" className="text-sky-500 hover:underline">
              Login
            </Link>
          </p>
        </form>
      </motion.div>
    </div>
  );
}
export default Register;
