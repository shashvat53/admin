import React from "react";
import { Link } from "react-router-dom";

const Approved = () => {
  const tableData = [
    // Sample data, replace with your actual data
    [
      "Data 1",
      "Data 2",
      "Data 3",
      "Data 4",
      "Data 5",
      "Data 6",
      "Data 7",
      "Data 8",
    ],
    // [
    //   "Data 1",
    //   "Data 2",
    //   "Data 3",
    //   "Data 4",
    //   "Data 5",
    //   "Data 6",
    //   "Data 7",
    //   "Data 8",
    //   ,
    //   ,
    // ],
  ];

  return (
    <>
      <h2 className="mx-8 text-2xl mt-8 font-bold">Approved Withdrwals</h2>
      <ol className="flex m-8 mt-[4px]">
        <li className="text-blue-500">
          <Link to="/dashboard">Home</Link>
        </li>
        &nbsp;/&nbsp;
        <li className="text-blue-500">
          <Link to="/#pin">Withdrwals</Link>
        </li>
        &nbsp;/&nbsp;
        <li className="text-gray-500">
          <Link to="/team-tree#"> Approved</Link>
        </li>
      </ol>

      <h3 className="font-bold mx-8">APPROVED WITHDRWALS</h3>
      <div class="border-t border-gray-400 my-4 mx-8"></div>

      <div className="m-8 flex gap-4">
        <input
          className="p-[4px_12px] border"
          type="text"
          placeholder="Enter Name"
        />
        <input
          className="p-[4px_12px] border"
          type="text"
          placeholder="Enter Username"
        />

        <select className="p-[4px_12px] border">
          <option>10</option>
          <option>20</option>
          <option>50</option>
          <option>100</option>
          <option>200</option>
        </select>
        <input
          type="submit"
          name="submit"
          className="border cursor-pointer  bg-gray-300 p-[4px_10px]"
          value="filter"
        ></input>

        <button>
          {" "}
          <Link
            to="https://demo.mlmreadymade.com/binary_investment/admin/users"
            className="p-[4px_10px] hover:bg-[#4169E1] bg-blue-500"
          >
            Reset
          </Link>
        </button>

        <input
          type="submit"
          name="submit"
          className="border  cursor-pointer bg-gray-300 p-[4px_10px]"
          value="Export to Excel"
        ></input>
      </div>

      {/* table */}
      <div className="  m-8">
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border">
            <thead className=" text-left border-b-2">
              <tr className="  border--2 ">
                {Array.from({ length: 8 }, (_, index) => (
                  <th key={index} className=" border-gray-400 border-b-2 p-2 ">
                    Column {index + 1}
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
    </>
  );
};

export default Approved;
