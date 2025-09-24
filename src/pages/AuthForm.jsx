import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function AuthForm() {
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("success");
  const [isLogin, setIsLogin] = useState(true);

  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const redirectByRole = (role) => {
    switch (role) {
      case "moderator":
        navigate("/bec-dashboard");
        break;
      case "student":
        navigate("/studentdash");
        break;
      case "admin":
        navigate("/members");
        break;
      default:
        navigate("/");
    }
  };

  const goToDashboard = () => {
    navigate("/dashboard"); // redirects to /dashboard

  };

  const onSubmit = (data) => {
    if (isLogin) {
      // LOGIN
      // const userData = JSON.parse(localStorage.getItem(data.email));
      // if (userData && userData.password === data.password) {
      //   setMessageType("success");
      //   setMessage(`Welcome back, ${userData.name}!`);
        // localStorage.setItem("loggedInUser", data.email);
        // redirectByRole(userData.category);
        // navigate("/deshboard");
        goToDashboard()

      // } else {
      //   setMessageType("error");
      //   setMessage("Email or password is incorrect.");
      // }
    } else {
      // SIGN UP
      const existingUser = localStorage.getItem(data.email);
      if (existingUser) {
        setMessageType("error");
        setMessage("User already exists");
        return;
      }

      const newUser = {
        name: data.name,
        email: data.email,
        password: data.password,
        category: data.category, 
        branch: data.branch,
      };

      localStorage.setItem(data.email, JSON.stringify(newUser));
      localStorage.setItem("loggedInUser", data.email);

      setMessageType("success");
      setMessage("Registration successful!");
      redirectByRole(newUser.category);
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
          {/* Sign Up fields */}
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
            </>
          )}

          {/* Email */}
          <div className="mb-4">
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="Email"
              className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">*Email* is mandatory</p>}
          </div>

          {/* Password */}
          <div className="mb-4">
            <input
              type="password"
              {...register("password", { required: true })}
              placeholder="Password"
              className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">*Password* is mandatory</p>}
          </div>

          {/* Branch (Sign-Up only) */}
          {!isLogin && (
            <div className="mb-6">
              <input
                type="text"
                {...register("branch", { required: true })}
                placeholder="Branch"
                className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
              />
              {errors.branch && <p className="text-red-500 text-sm mt-1">*Branch* is mandatory</p>}
            </div>
          )}

          {/* Buttons */}
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
