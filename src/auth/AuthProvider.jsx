import { createContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import PropTypes from "prop-types";
import auth from "./auth";
import useAxiosPublic from "../hooks/axios/useAxiosPublic";

//created authentication context
export const AuthContext = createContext(null);

//main auth provider
const AuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);
  const axios = useAxiosPublic();

  const adminLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  const info = {
    admin,
    loading,
    adminLogin,
    logOut,
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (admin) => {
      setAdmin(admin);
      setLoading(false);
      if (admin) {
        axios
          .post("/createToken", {
            username: import.meta.env.VITE_Admin_Username,
            email: admin.email,
          })
          .then((res) => {
            if (res.data.token) {
              localStorage.setItem("token", res.data.token);
            }
          })
          .catch((err) => {
            console.log(err.message);
          });
      }
    });
    return () => unSubscribe();
  }, []);

  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;
