import { useQuery } from "@tanstack/react-query";
import moment from "moment";
import useAxiosPublic from "../../../../hooks/axios/useAxiosPublic";
import { Link } from "react-router-dom";

const Contacts = () => {
  const axios = useAxiosPublic();

  const { data: contacts } = useQuery({
    queryKey: ["clientContacts"],
    queryFn: async () => {
      const res = await axios.get("/admin/contacts");
      return res.data;
    },
  });

  return (
    <div className="overview min-h-screen">
      <div className="p-4">
        <div className="text-white flex justify-between">
          <h1 className="text-3xl">Contacts</h1>
          <h2 className="text-3xl">{moment().format("DD/MM/YYYY")}</h2>
        </div>
      </div>
      {contacts?.length === 0 ? (
        <h2 className="text-white text-3xl text-center">No Contacts Found</h2>
      ) : (
        <div className="overflow-x-auto text-white">
          <table className="table">
            <thead>
              <tr>
                <th className="text-white text-xl">Serial</th>
                <th className="text-white text-xl">Name</th>
                <th className="text-white text-xl">Date</th>
              </tr>
            </thead>
            <tbody>
              {contacts?.map((contact, index) => (
                <tr key={contact?._id}>
                  <th>{`${index + 1}.`}</th>
                  <td>
                    <Link to={`/dashboard/contacts/${contact?._id}`}>
                      {contact?.name}
                    </Link>
                  </td>
                  <td>{contact?.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Contacts;
