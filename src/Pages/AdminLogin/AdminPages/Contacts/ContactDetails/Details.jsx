import { useParams } from "react-router-dom";
import useAxiosPublic from "../../../../../hooks/axios/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const Details = () => {
  const contactId = useParams().id;
  const axios = useAxiosPublic();

  const { data } = useQuery({
    queryKey: ["contactDetails", contactId],
    queryFn: async () => {
      const res = await axios.get(`/admin/contacts/${contactId}`);
      return res.data;
    },
  });

  return (
    <div className="p-4 min-h-screen">
      <div className="lg:w-1/2 lg:mx-auto border p-4 rounded-lg space-y-4">
        <div className="flex justify-between items-center">
          <p>
            <span className="text-[#55f2fa]">Date : </span>
            {data?.date}
          </p>
          <p>
            <span className="text-[#55f2fa]">Time : </span> {data?.time}
          </p>
        </div>
        <h1>
          <span className="text-[#55f2fa]">Name : </span>
          {data?.name}
        </h1>
        <h3>
          <span className="text-[#55f2fa]">Subject : </span>
          {data?.subject}
        </h3>
        <p>
          <span className="text-[#55f2fa]">Message :</span> {data?.message}
        </p>
      </div>
    </div>
  );
};

export default Details;
