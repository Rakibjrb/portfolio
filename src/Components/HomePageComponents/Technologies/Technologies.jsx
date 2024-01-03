import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Marquee from "react-fast-marquee";
import SectionHeader from "../../CommonComponets/SectionHeader/SectionHeader";
import Technology from "./Technology";
import "./tech.css";

const Technologies = () => {
  const { data: techs } = useQuery({
    queryKey: ["getalltechs"],
    queryFn: async () => {
      const res = await axios.get("./techandtools.json");
      return res.data;
    },
  });

  return (
    <div className="mb-24 tech-container">
      <SectionHeader title={"Technologies That I Know"} />
      <Marquee pauseOnHover={true}>
        <div className="flex">
          {techs?.map((tech) => (
            <Technology key={tech.id} tech={tech} />
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Technologies;
