import React from "react";
import Nav from "./Nav";
import MainContent from "./MainContent";

const RightsideContent = () => {
  return (
    <>
      <div className="w-full">
        <Nav />
        <MainContent />
      </div>
    </>
  );
};

export default RightsideContent;
