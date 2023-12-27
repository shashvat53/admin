import React from "react";
import { Link } from "react-router-dom";

const AllPackages = () => {
  const tableData = [
    // Sample data, replace with your actual data
    ["ID", "ACTION", "NAME", "RATE($)", "BV", "PV", "ACTIVE STATUS"],
    ["ID", "ACTION", "Data 3", "Data 4", "Data 5", "Data 6", "Data 7"],
    ["ID 1", "ACTION 2", "Data 3", "Data 4", "Data 5", "Data 6", "Data 7"],
    ["ID 1", "ACTION 2", "Data 3", "Data 4", "Data 5", "Data 6", "Data 7"],
    ["ID 1", "ACTION 2", "Data 3", "Data 4", "Data 5", "Data 6", "Data 7"],
    ["ID 1", "ACTION 2", "Data 3", "Data 4", "Data 5", "Data 6", "Data 7"],
    ["ID 1", "ACTION 2", "Data 3", "Data 4", "Data 5", "Data 6", "Data 7"],
  ];

  return (
    <>
      <h2 className="mx-8 text-2xl mt-8 font-bold">Packages</h2>
      <ol className="flex m-8 mt-[4px]">
        <li className="text-blue-500">
          <Link to="/dashboard">Home</Link>
        </li>
        &nbsp;/&nbsp;
        <li className="text-blue-500">
          <Link to="/#Packages">Packages</Link>
        </li>
      </ol>

      <h3 className="font-bold mx-8">Packages</h3>
      <div class="border-t border-gray-400 my-4 mx-8"></div>

      {/* table */}
      <div className="  m-8">
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border">
            <thead className=" text-left border-b-2">
              <tr className="  border--2 ">
                {tableData[0].map((heading, index) => (
                  <th key={index} className=" border-gray-400 border-b-2 p-2 ">
                    {heading}
                  </th>
                ))}

                {/* {Array.from({ length: 7 }, (_, index) => (
                  <th key={index} className=" border-gray-400 border-b-2 p-2 ">
                    ID {index + 1}
                  </th>
                ))} */}
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
    </>
  );
};

export default AllPackages;
