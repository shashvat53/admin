import React from "react";
import { Link } from "react-router-dom";

const GeneralSetting = () => {
  const tableData = [
    // Sample data, replace with your actual data
    ["S NO.", "Setting NAme", "ACTION"],
    ["Data 1", "Data 2", "Data 3"],
    ["Data 1", "Data 2", "Data 3"],
  ];

  return (
    <div>
      <ol className="flex m-8 ">
        <li className="text-blue-500">
          <Link to="/dashboard">Home</Link>
        </li>
        &nbsp;/&nbsp;
        <li className="text-blue-500">
          <Link to="/team-tree#">Team Tree</Link>
        </li>
      </ol>

      {/* table */}
      <div className="  m-8">
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border">
            <thead className=" text-left border-b-2">
              <tr className=" border-gray-700 border--2 ">
                {tableData[0].map((heading, index) => (
                  <th key={index} className="border-b-2 p-2 ">
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className=" border-gray-400 border-b-2  hover:bg-white"
                >
                  {row.map((data, colIndex) => (
                    <td key={colIndex} className="border p-2">
                      {data}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <h3 className="text-center mb-4">
        Copyright © 2023 Binary investment demo
      </h3>
    </div>
  );
};

export default GeneralSetting;
