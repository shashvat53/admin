import React from "react";
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";
import RightsideContent from "../components/RightsideContent";

const Home = () => {
  return (
    <>
      <div className="flex w-full">
        <Sidebar />
        <RightsideContent />
      </div>
    </>
  );
};

export default Home;
