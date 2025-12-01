
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async () => {
//     try {
//       const res = await fetch("http://192.168.18.29:5000/users/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password })
//       });

//       const data = await res.json();

//       console.log("API TOKEN =", data.token);
//       setMessage(data.message || data.error);

//       if (data.token) {
//         // ✅ Save token in localStorage
//         localStorage.setItem("authToken", data.token);

//         // ✅ Redirect to dashboard
//         navigate("/dashboard");
//       } else {
//         alert("Invalid login credentials");
//       }

//     } catch (err) {
//       console.error("Login error:", err);
//       alert("Something went wrong! Try again.");
//     }
//   };

//   return (
//     <div style={{ padding: 20 }}>
//       <h2>Login</h2>

//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       /><br /><br />

//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       /><br /><br />

//       <button onClick={handleLogin}>Login</button>

//       <p>{message}</p>
//     </div>
//   );
// }
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const LoginPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [errorMsg, setErrorMsg] = useState("");

//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     setLoading(true);
//     setErrorMsg("");

//     try {
//       const res = await fetch("http://192.168.18.29:5000/users/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await res.json();

//       console.log("API TOKEN =", data.token);

//       if (data.token) {
//         // Save token
//         localStorage.setItem("authToken", data.token);

//         // Redirect
//         navigate("/dashboard");
//       } else {
//         setErrorMsg(data.message || "Invalid login credentials");
//       }
//     } catch (err) {
//       console.error("Login Error:", err);
//       setErrorMsg("Something went wrong! Try again.");
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-200 via-blue-100 to-white">
//       <div className="w-full max-w-[480px] bg-white rounded-2xl shadow-xl p-8 md:p-10 m-4">

//         {/* Header */}
//         <div className="mb-8">
//           <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h2>
//           <p className="text-gray-500 text-sm">Join the future of real estate</p>
//         </div>

//         {/* Error */}
//         {errorMsg && (
//           <div className="bg-red-100 text-red-600 px-4 py-2 rounded mb-4 border border-red-300">
//             {errorMsg}
//           </div>
//         )}

//         {/* Form */}
//         <form className="space-y-4" onSubmit={handleLogin}>
//           {/* Email */}
//           <div>
//             <label className="block text-sm font-semibold text-gray-900 mb-2">
//               Email Address
//             </label>
//             <input
//               type="email"
//               required
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:border-sky-500 focus:ring-sky-500 transition-colors"
//               placeholder="your.email@example.com"
//             />
//           </div>

//           {/* Password */}
//           <div>
//             <label className="block text-sm font-semibold text-gray-900 mb-2">
//               Password
//             </label>
//             <input
//               type="password"
//               required
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:border-sky-500 focus:ring-sky-500 transition-colors"
//               placeholder="Enter password"
//             />
//           </div>

//           {/* Login Button */}
//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-gradient-to-r from-sky-400 to-sky-600 text-white font-bold py-3 rounded-lg shadow-md hover:scale-[1.01] transition-all"
//           >
//             {loading ? "Logging in..." : "Login Now"}
//           </button>

//           {/* Footer */}
//           <div className="text-center mt-6">
//             <p className="text-sm text-gray-500">
//               Don't have an account?{" "}
//               <span
//                 onClick={() => navigate("/signup")}
//                className="font-bold text-sky-600 cursor-pointer">
//                 Sign Up
//               </span>
//             </p>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;
// src/pages/Login.jsx
import { useState } from "react";
import { api, setAuthToken } from "../api/api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const { data } = await api.post("/login", { email });

      localStorage.setItem("token", data.token);
      localStorage.setItem("userId", data.user._id);

      setAuthToken(data.token);

      navigate("/users");
    } catch (err) {
      console.error(err);
      alert("Login failed!");
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>Login</h2>

      <input
        placeholder="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
        style={{ padding: 10, width: 300 }}
      />

      <br /><br />

      <button onClick={handleLogin} style={{ padding: 10 }}>
        Login
      </button>
    </div>
  );
}
