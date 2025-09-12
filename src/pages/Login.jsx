// import React from "react";
// import {useRorm} from "react-router-dom"


// function Login() {
//   const Login {
//     register,
//     handleSubmit, 
//     formState: {errors},
//   } = useForm();

//   const onSubmit = (data) => {
//       const userData = JSON.parse(localStorage.detItem(data.email));
//       if(userData) {
//         if(userData.password === data.password){
//           console.log(userData.name + "Successfully Logged")
//         }else {
//           console.log("Email or Password doesn't match with our record");
//         }
//       }else{
//         console.log("Email or Password doesn't match with our record")
//       }
//   };

//   return (
//     <>
//         <h2>Login</h2>

//         <form className= "App" onSubmit={handleSubmit(onSubmit)}>
//           <input
//               type="email"
//               {...register("email", {required: true})}
//               placeholder="Email"
//           />

//           {errors.email && <span style={{color: "red"}}}>*Email* is mandatory </span>}

//           <input 
//               type="password"
//               {... register("password", {required: true})}
//               placeholder="Password"
//               />
//               {errors.password && <span style={{color: "red"}}>*Password* is mandatory</span>}

//               <input type="submit" style={{ backgroundColor: "#a1eafb "}} />

//         </form>  
//     </>   
//   );

// }

// export default Login;
