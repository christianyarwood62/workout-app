import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthentication } from "../contexts/AuthenticationContext";

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuthentication();

  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isAuthenticated) navigate("/");
    },
    [isAuthenticated, navigate]
  );
  return isAuthenticated ? children : null;
}

export default ProtectedRoute;
