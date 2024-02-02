import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import moment from "moment";
import { MdDelete, MdOutlinePreview } from "react-icons/md";
import useAxiosPublic from "../../../../hooks/axios/useAxiosPublic";
import Swal from "sweetalert2";

const Contacts = () => {
  const axios = useAxiosPublic();

  const { data: contacts, refetch } = useQuery({
    queryKey: ["clientContacts"],
    queryFn: async () => {
      const res = await axios.get("/admin/contacts");
      return res.data;
    },
  });

  const handleDelete = async (id) => {
    const res = await axios.delete(`/admin/contacts/${id}`);
    if (res.data.delete) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Contact Deleted",
        showConfirmButton: false,
        timer: 1500,
      });
      refetch();
    } else {
      Swal.fire("Something went wrong!!!");
    }
  };

  return (
    <div className="min-h-screen">
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
                <th className="text-white text-xl">Status</th>
              </tr>
            </thead>
            <tbody>
              {contacts?.map((contact, index) => (
                <tr key={contact?._id}>
                  <th>{`${index + 1}.`}</th>
                  <td>
                    <Link
                      className="hover:text-[#6ce8f5] transition-colors"
                      to={`/dashboard/contacts/${contact?._id}`}
                    >
                      {contact?.name}
                    </Link>
                  </td>
                  <td>{contact?.date}</td>
                  <td>
                    <div className="flex gap-3">
                      <div
                        className={`p-2 rounded-md ${
                          contact?.status === "toview"
                            ? "bg-red-600"
                            : "bg-green-500"
                        }`}
                      >
                        <MdOutlinePreview className="text-xl" />
                      </div>
                      <button
                        onClick={() => handleDelete(contact?._id)}
                        className="p-2 rounded-md bg-red-600 hover:bg-red-700 transition-colors"
                      >
                        <MdDelete className="text-xl" />
                      </button>
                    </div>
                  </td>
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
