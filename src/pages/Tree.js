import React from "react";
import { Link } from "react-router-dom";
import NestedStructure from "../components/NestedStructure";

const Tree = () => {
  return (
    <>
      <h2 className="mx-8 text-2xl mt-8 font-bold">Generation Team</h2>
      <ol className="flex m-8 mt-[4px]">
        <li className="text-blue-500">
          <Link to="/dashboard">Home</Link>
        </li>
        &nbsp;/&nbsp;
        <li className="text-blue-500">
          <Link to="/team-tree#">Team Tree</Link>
        </li>
      </ol>

      <h3 className="font-bold mx-8">TEAM TREE</h3>
      <div class="border-t border-gray-400 my-4 mx-8"></div>

      <div className="flex justify-center items-center h-scree">
        <NestedStructure />
      </div>
    </>
  );
};

export default Tree;
