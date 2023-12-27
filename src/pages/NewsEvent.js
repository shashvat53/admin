import React from "react";
import { Link } from "react-router-dom";

const NewsEvent = () => {
  const tableData = [
    // Sample data, replace with your actual data
    ["#", "Title", "Description", "Image", "Status", "Action"],
    ["Data 1", "Data 2", "Data 3", "Data 4", "Data 5", "Data 6"],
    ["Data 1", "Data 2", "Data 3", "Data 4", "Data 5", "Data 6"],
  ];

  return (
    <>
      <h2 className="mx-8 text-2xl mt-8 font-bold">Orders</h2>
      <ol className="flex m-8 mt-[4px]">
        <li className="text-blue-500">
          <Link to="/dashboard">Home</Link>
        </li>
        &nbsp;/&nbsp;
        <li className="text-blue-500">
          <Link to="/#pin">order</Link>
        </li>
        &nbsp;/&nbsp;
        <li className="text-gray-500">
          <Link to="/team-tree#">All</Link>
        </li>
      </ol>

      <div className="m-8 flex w-full flex-wrap">
        <div className="w-[40%] shadow-md p-[8px_22px]">
          <div className="">
            <h3 className="bg-white p-[4px_8px] text-lg font-semibold mb-2">
              Add Alert
            </h3>
            <div className="flex flex-col gap-2 mb-2">
              <span className="text-sm font-semibold text-gray-500">
                SELECT ALERT TYPE
              </span>
              <select className="p-2">
                <option>Image and text</option>
                <option>One line</option>
              </select>
            </div>
            <div className="flex flex-col gap-2 mb-2">
              <span className="text-sm font-semibold text-gray-500">TITLE</span>
              <input
                type="text"
                placeholder="Enter Title here"
                className="p-2"
              />
            </div>
            <div className="flex flex-col gap-2 mb-2">
              <span className="text-sm font-semibold text-gray-500">
                DESCRIPTION
              </span>

              <textarea
                className=" p-2 border border-gray-300 "
                rows="3"
                placeholder="Enter your text here..."
              ></textarea>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-sm font-semibold text-gray-500">IMAGE</span>

              <input type="file" id="file" name="file" className="" />
            </div>
            <button className="p-[6px_22px] rounded-sm bg-[#0F1E35] text-white my-2">
              ADD ALERT
            </button>
          </div>
        </div>
        <div className="w-[50%] shadow-md">
          <div className="ml-[30px] py-[8px]">
            <input type="text" placeholder="Search" className="p-2 mr-2" />
            <button className="p-[4px_12px] shadow-md bg-gray-400">
              Search
            </button>
          </div>
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
        </div>
      </div>
    </>
  );
};

export default NewsEvent;
