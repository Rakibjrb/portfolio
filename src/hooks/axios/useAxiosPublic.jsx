import axios from "axios";

const useAxiosPublic = () => {
  const instance = axios.create({
    baseURL: `${import.meta.env.VITE_Server_uri}`,
    withCredentials: true,
  });

  return instance;
};

export default useAxiosPublic;
