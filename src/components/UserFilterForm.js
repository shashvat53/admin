import React from "react";
import { Link } from "react-router-dom";

const UserFilterForm = () => {
  return (
    <>
      <ol className="flex m-8">
        <li className="text-blue-500">
          <Link to="/dashboard">Home</Link>
        </li>
        &nbsp;/&nbsp;
        <li className="text-blue-500">
          <Link to="/dashboard">Users</Link>
        </li>
        &nbsp;/&nbsp;
        <li className="text-gray-500">
          <Link to="/dashboard">All Users</Link>
        </li>
      </ol>

      <div className="bg-white shadow-md rounded-md p-4 m-8">
        {/* Single Row: Input Fields and Dropdowns */}
        <div className="flex mb-4 flex-wrap gap-4">
          {/* Input Fields */}
          <input
            type="text"
            className="flex-1 border p-2 "
            placeholder="Input 1"
          />
          <input
            type="text"
            className="flex-1 border p-2 "
            placeholder="Input 2"
          />
          <input
            type="text"
            className="flex-1 border p-2 "
            placeholder="Input 3"
          />
          <input
            type="text"
            className="flex-1 border p-2 "
            placeholder="Input 4"
          />
          <input
            type="text"
            className="flex-1 border p-2 "
            placeholder="Input 5"
          />

          {/* Dropdowns */}
          <select className="flex-1 border p-2 ">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>

          <select className="flex-1 border p-2 ">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>

          <select className="flex-1 border p-2  ">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>

          <input
            type="submit"
            name="submit"
            className="border p-1"
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

          <input
            type="submit"
            name="export_to_excel"
            className="border p-[4px_8px]"
            value="Export to excel"
          ></input>
        </div>
      </div>
    </>
  );
};

export default UserFilterForm;
