import React from "react";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const userData = JSON.parse(localStorage.getItem(data.email));
    if (userData) {
      if (userData.password === data.password) {
        console.log(`${userData.name} successfully logged in.`);
      } else {
        console.log("Email or password doesn't match our records.");
      }
    } else {
      console.log("Email or password doesn't match our records.");
    }
  };

  return (
    <>
      <h2 className="text-center text-xl font-bold mb-4">Login</h2>

      <form className="flex flex-col gap-4 items-center" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          {...register("email", { required: true })}
          placeholder="Email"
          className="p-2 border border-gray-300 rounded"
        />
        {errors.email && <span className="text-red-500">*Email* is mandatory</span>}

        <input
          type="password"
          {...register("password", { required: true })}
          placeholder="Password"
          className="p-2 border border-gray-300 rounded"
        />
        {errors.password && <span className="text-red-500">*Password* is mandatory</span>}

        <input
          type="submit"
          value="Login"
          className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600"
        />
      </form>
    </>
  );
}

export default Login;
