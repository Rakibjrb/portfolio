import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ImSpinner9 } from "react-icons/im";
import Swal from "sweetalert2";
import useAuth from "../../hooks/auth/useAuth";

const AdminLogin = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { adminLogin } = useAuth();

  const handleAdminLogin = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (username !== import.meta.env.VITE_Admin_Username) {
      Swal.fire("Please Enter valid username");
      return;
    }

    setLoading(true);
    adminLogin(email, password)
      .then(() => {
        setLoading(false);
        Swal.fire("Admin login success");
        navigate("/dashboard");
      })
      .catch((err) => {
        setLoading(false);
        Swal.fire(err.message);
      });
  };

  return (
    <div className="w-full h-screen flex justify-center items-center px-4">
      <div className="text-white max-w-[500px] p-6 md:p-10 rounded-md border border-[#07A2E7]">
        <h1 className="text-center text-4xl">Admin Login</h1>
        <form className="space-y-5 pt-10" onSubmit={handleAdminLogin}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="input input-bordered input-info w-full"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered input-info w-full"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input input-bordered input-info w-full"
            required
          />
          <button
            type="submit"
            className="input input-bordered input-info w-full hover:bg-[#07A2E7] uppercase transition-colors"
          >
            {loading ? (
              <div className="flex justify-center items-center">
                <ImSpinner9 className="text-xl animate-spin text-center" />
              </div>
            ) : (
              "Login Now"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
