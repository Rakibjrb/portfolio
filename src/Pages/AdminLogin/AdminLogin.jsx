import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/auth/useAuth";

const AdminLogin = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { googleLogin } = useAuth();

  const handleGoogleLogin = () => {
    setLoading(true);
    googleLogin()
      .then(() => {
        setLoading(false);
        Swal.fire("google login success");
        navigate("/dashboard");
      })
      .catch((err) => {
        setLoading(false);
        Swal.fire(err.message);
      });
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <button
        onClick={handleGoogleLogin}
        className="text-2xl text-white border border-white w-64 h-14 rounded-xl"
      >
        {loading ? "Please Wait ..." : "Login Now"}
      </button>
    </div>
  );
};

export default AdminLogin;
