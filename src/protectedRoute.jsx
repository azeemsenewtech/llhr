// ProtectedRoute.js
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  // Token name must match what you save in Login.js
  const token = localStorage.getItem("authToken");
  console.log("ProtectedRoute token:", token);

  if (!token) {
    // User not logged in → redirect to login
    return <Navigate to="/login" replace />;
  }

  // User logged in → render child components
  return children;
};

export default ProtectedRoute;
