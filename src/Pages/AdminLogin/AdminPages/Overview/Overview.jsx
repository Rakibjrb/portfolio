import moment from "moment";
import Topbar from "./Topbar";
import "./overview.css";

const Overview = () => {
  return (
    <div className="overview min-h-screen">
      <div className="p-4">
        <div className="text-white flex justify-between">
          <h1 className="text-3xl">Admin Panel</h1>
          <h2 className="text-3xl">{moment().format("DD/MM/YYYY")}</h2>
        </div>
        <Topbar />
      </div>
    </div>
  );
};

export default Overview;
