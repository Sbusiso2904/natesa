// import React from "react";
// import { useForm } from "react-hook-form";
// import "./App.jsx";
// import Login from "./Login.jsx";

// function Register(){
//   const {
//     register, 
//     handleSubmit,
//     formState: {error},
//   } = useForm();

//   const onSubmit = (data) => {
//     const userData = JSON.parse(localStorage.getItem(data.email));
//     if (userData) {
//       if (userData.password === data.password){
//         console.log(userData.name + "You Are Successfull Logged In");
//       }else{
//         console.log("Email or Password is not matching with our record");
//       }
//     }else{
//       console.log ("Email or Password is not matching with our record");
//     } 
//   };
  
//   return(
//     <>
//         <h2>Login Form</h2>
//         <form className="App" onSubmit={handleSubmit(onSubmit)}>
//           <input 
//               type="email"
//               {...register("email", {required: true})}
//               placeholder="Email"
//           />
//           {error.email && <span style={{color: "red"}}>*Email* is mandatory</span>}

//           <input
//               type="password"
//               {...register("password", {required: true})}
//               placeholder="Password"
//           />
//           {error.password && <span style={{color: "red"}}>*Password* is mandatory</span>}        


//           <input type="submit" style={{backgroundColor: "#a1eafb"}}
//           />

//         </form>
//     </>    
//   );
// }

// export default Register;

