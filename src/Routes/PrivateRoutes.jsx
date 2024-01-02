import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import useAuth from "../hooks/auth/useAuth";

const PrivateRoutes = ({ children }) => {
  const { admin, loading, logOut } = useAuth();

  if (loading) {
    return (
      <div className="w-full h-32 flex justify-center items-center">
        <h1 className="text-3xl text-[#58b8d3]">Please Wait ...</h1>
      </div>
    );
  }

  if (admin) {
    return children;
  }
  logOut();
  return <Navigate to={"/admin-login"} />;
};

PrivateRoutes.propTypes = {
  children: PropTypes.node,
};
export default PrivateRoutes;
