import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AuthForm() {
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("success");
  const [isLogin, setIsLogin] = useState(true);

  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const redirectByRole = (role) => {
    switch (role) {
      case "moderator":
        navigate("/dashboard/bec-dashboard");
        break;
      case "student":
        navigate("/dashboard/studentdash");
        break;
      case "admin":
        navigate("/dashboard/admin");
        break;
      default:
        navigate("/dashboard");
    }
  };

  // const onSubmit = async (data) => {
  // try {
  //   if (isLogin) {
  //     // LOGIN
  //     const response = await axios.post("http://localhost:8080/api/auth/login", data);
  //     setMessageType("success");
  //     setMessage("Welcome back!");

  //     // redirect based on category
  //     redirectByRole(response.data.category);
  //   } else {
  //     // SIGNUP
  //     const response = await axios.post("http://localhost:8080/api/auth/signup", data);
  //     setMessageType("success");
  //     setMessage(response.data);
  //     redirectByRole(data.category);
  //   }
  // } catch (error) {
  //   setMessageType("error");
  //   setMessage(error.response?.data || "Something went wrong");
  // }



  const onSubmit = async (data) => {
    try {
      if (isLogin) {

        // LOGIN: Call Spring Boot API
        const response = await axios.post("http://localhost:8080/api/auth/login", data);
        const user = response.data;

        setMessageType("success");
        setMessage(`Welcome back, ${user.name}!`);
        // Optionally store user token/session
        localStorage.setItem("loggedInUser", JSON.stringify(user));

        redirectByRole(user.category);

      } else {

        // SIGN UP: Call Spring Boot API
        const response = await axios.post("http://localhost:8080/api/auth/signup", data);
        const user = response.data;

        setMessageType("success");
        setMessage("Registration successful!");
        localStorage.setItem("loggedInUser", JSON.stringify(user));
        console.log("we wants to enters")

        redirectByRole(user.category);
      }
    } catch (error) {
      setMessageType("error");
      if (error.response && error.response.data && error.response.data.message) {
        setMessage(error.response.data.message);
      } else {
        setMessage("An error occurred. Please try again.");
      }
      console.error(error);
      console.log("we wants to enters")
    }

    reset(); // Clear form
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-300 px-4">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isLogin ? "Login" : "Sign Up"}
        </h2>

        {/* Feedback */}
        {message && (
          <div className={`mb-4 text-center font-semibold ${messageType === "success" ? "text-green-600" : "text-red-600"}`}>
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)}>
          {!isLogin && (
            <>
              <div className="mb-4">
                <input
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="Full Name"
                  className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">*Name* is mandatory</p>}
              </div>

              <div className="mb-4">
                <select
                  {...register("category", { required: true })}
                  className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                >
                  <option value="">Select Category</option>
                  <option value="admin">NEC</option>
                  <option value="moderator">BEC</option>
                  <option value="student">STUDENT MEMBER</option>
                </select>
                {errors.category && <p className="text-red-500 text-sm mt-1">*Category* is mandatory</p>}
              </div>

              <div className="mb-6">
                <input
                  type="text"
                  {...register("branch", { required: true })}
                  placeholder="Branch"
                  className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                />
                {errors.branch && <p className="text-red-500 text-sm mt-1">*Branch* is mandatory</p>}
              </div>
            </>
          )}

          <div className="mb-4">
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="Email"
              className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">*Email* is mandatory</p>}
          </div>

          <div className="mb-4">
            <input
              type="password"
              {...register("password", { required: true })}
              placeholder="Password"
              className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">*Password* is mandatory</p>}
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              {isLogin ? "Login" : "Sign Up"}
            </button>
            <button
              type="button"
              onClick={() => {
                setIsLogin(!isLogin);
                setMessage("");
                reset();
              }}
              className="text-sm text-blue-600 hover:underline focus:outline-none"
            >
              {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AuthForm;
