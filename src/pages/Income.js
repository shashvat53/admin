import React from "react";
import { Link } from "react-router-dom";

const Income = () => {
  const heading = [
    "SPONSOR BONUS",
    "ROI INCOME",
    "MATCHING BONUS",
    "REWARD INCOME",
    "DRB BONUS",
  ];
  const tableData = [
    ["Data 1", "Data 2", "Data 3", "Data 4", "Data 5", , ,],
    ["Data 1", "Data 2", "Data 3", "Data 4", "Data 5", , , ,],
  ];
  return (
    <>
      <h2 className="mx-8 text-2xl mt-8 font-bold">Income</h2>
      <ol className="flex m-8 mt-[4px]">
        <li className="text-blue-500">
          <Link to="/dashboard">Home</Link>
        </li>
        &nbsp;/&nbsp;
        <li className="text-blue-500">
          <Link to="/#pin">Income</Link>
        </li>
      </ol>

      <h3 className="font-bold mx-8">INCOME</h3>
      <div class="border-t border-gray-400 my-4 mx-8"></div>

      <div className="m-8 flex gap-3 flex-wrap">
        <select className="p-[4px_12px] border">
          <option>Select Month</option>
          <option>January</option>
          <option>Faburary</option>
          <option>March</option>
          <option>April</option>
          <option>May</option>
          <option>June</option>
          <option>July</option>
          <option>Agust</option>
          <option>September</option>
          <option>October</option>
          <option>November</option>
          <option>December</option>
        </select>

        <input
          type="submit"
          name="submit"
          className="border bg-gray-300 p-[4px_10px]"
          value="filter"
        ></input>
      </div>

      <h2 className="text-center text-2xl font-bold">Income Section</h2>

      {/* table */}
      <div className="  m-8">
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border">
            <thead className=" text-left border-b-2">
              <tr className=" border-gray-700 border--2 ">
                {heading.map((heading, index) => (
                  <th key={index} className="border-b-2 p-2 font-semibold">
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
      <h2 className="text-center mt-16">
        <span className="font-semibold">Total Income</span> :1204
      </h2>

      <div class="border-t border-gray-400 my-4 mx-8"></div>
      <h3 className="text-center mb-4">
        Copyright © 2023 Binary investment demo
      </h3>
    </>
  );
};

export default Income;
