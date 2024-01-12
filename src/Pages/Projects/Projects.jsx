import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import SectionHeader from "../../Components/CommonComponets/SectionHeader/SectionHeader";
import LatestProjects from "../../Components/HomePageComponents/LatestProjects/LatestProjects";
import TabPanelProjects from "./TabPanelProjects/TabPanelProjects";

import "react-tabs/style/react-tabs.css";
import "./projects.css";

const tabs = ["All", "MERN", "Front End", "Basic"];

const Projects = () => {
  return (
    <div className="max-w-7xl mx-auto px-3 xl:px-0 mt-16 mb-64">
      <LatestProjects />
      <div data-aos="zoom-in-up" data-aos-duration="1000" className="mt-32">
        <SectionHeader title={"My All Projects"} />
        <Tabs>
          <TabList>
            {tabs.map((tabname, index) => (
              <Tab key={`tabname${index}`}>{tabname}</Tab>
            ))}
          </TabList>
          {tabs.map((tab, index) => (
            <TabPanel key={`tabpanel${index}`}>
              <TabPanelProjects tab={tab} />
            </TabPanel>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Projects;
