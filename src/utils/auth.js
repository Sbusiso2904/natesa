// export const getAllUsers = () => {
//   const keys = Object.keys(localStorage).filter((k) => k.includes("@")); // crude filter
//   return keys.map((key) => JSON.parse(localStorage.getItem(key)));
// };

// export const saveUser = (user) => {
//   localStorage.setItem(user.email, JSON.stringify(user));
// };

// export const moveToAlumni = (email) => {
//   const user = JSON.parse(localStorage.getItem(email));
//   if (!user) return;
//   user.status = "alumni";
//   localStorage.setItem(email, JSON.stringify(user));
// };
