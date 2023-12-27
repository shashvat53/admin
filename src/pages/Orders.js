import React from "react";
import { Link } from "react-router-dom";
import DateRangePicker from "../components/DateRangePicker";

const Orders = () => {
  const tableData = [
    // Sample data, replace with your actual data
    [
      "S NO.",
      "ACTION",
      "USERID(NAME)",
      "ORDER ID",
      "ORDER AMMOUNT ($)",
      "PAYMENT STATUS",
      "DATE",
    ],
    ["Data 1", "Data 2", "Data 3", "Data 4", "Data 5", "Data 6", "Data 7"],
    ["Data 1", "Data 2", "Data 3", "Data 4", "Data 5", "Data 6", "Data 7"],
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

      <h3 className="font-bold mx-8">ORDERS(3)</h3>
      <div class="border-t border-gray-400 my-4 mx-8"></div>

      <div className="m-8 flex gap-3 flex-wrap">
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

        <DateRangePicker />

        <select className="p-[4px_12px] border">
          <option>10</option>
          <option>20</option>
          <option>30</option>
          <option>40</option>
          <option>50</option>
        </select>

        <select className="p-[4px_12px] border">
          <option>Select Payment</option>
          <option>Pendding</option>
          <option>Success</option>
        </select>

        <input
          type="submit"
          name="submit"
          className="border bg-gray-300 p-[4px_10px]"
          value="filter"
        ></input>

        <button>
          {" "}
          <Link
            to="https://demo.mlmreadymade.com/binary_investment/admin/users"
            className="p-[6px_12px] hover:bg-[#4169E1] bg-blue-500"
          >
            Reset
          </Link>
        </button>
      </div>

      <h1 className="text-right mr-8 text-md font-semibold border-b-2">
        Total Order Amount(22000)
      </h1>

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
    </>
  );
};

export default Orders;
