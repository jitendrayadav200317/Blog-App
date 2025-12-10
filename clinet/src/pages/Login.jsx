import React from "react";
import { motion } from "motion/react";
import { Button } from "@mantine/core";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "this is has to be valid email" })
    .email("this is valid email.."),
  password: z.string(),
});
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.3 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-150 "
      >
        <h1 className=" text-2xl mb-4 font-bold">Login</h1>

        <form className="space-y-6 w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter Email..."
              className="focus:outline-none border-b w-full border-gray-300"
              {...register("email")}
            />
            {errors.email && <P>{errors.email.message}</P>}
          </div>

          <div className="flex gap-2">
            <input
              type="password"
              placeholder="Enter Pass..."
              className="focus:outline-none border-b w-full border-gray-300"
              {...register("password")}
            />
          </div>

          <Button type="submit" color="#6f6af8">login</Button>

          <p className="   text-gray-800">
            Don't have an account?
            <Link to="/register" className="text-sky-500 hover:underline">
              Register
            </Link>
          </p>
        </form>
      </motion.div>
    </div>
  );
  
}

export default Login;
