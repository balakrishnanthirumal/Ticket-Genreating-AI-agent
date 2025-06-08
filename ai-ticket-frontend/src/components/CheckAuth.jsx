import { useEffect, useState } from "react";
import { useNavigate, useNavigation } from "react-router-dom";

const CheckAuth = ({ children, protectedRoute }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (protectedRoute) {
      if (!token) {
        navigate("/login");
      } else {
        setLoading(false);
      }
    } else {
      if (token) {
        navigate("/");
      } else {
        setLoading(false);
      }
    }
  }, [navigate, protectedRoute]);
  if (loading) {
    <div>Loading...</div>;
  }
  return children;
};
export default CheckAuth;
