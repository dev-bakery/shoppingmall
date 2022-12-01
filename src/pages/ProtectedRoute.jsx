import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../components/context/AuthContext";

export default function ProtectedRoute({ children, requireAdmin }) {
  const { user } = useAuthContext();
  // console.log(children);

  if (!user || (requireAdmin && !user.isAdmin)) {
    return <Navigate to='/' replace />;
  }

  return children;
}
