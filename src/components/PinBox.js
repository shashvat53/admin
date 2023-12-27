import React from "react";
import { Link } from "react-router-dom";

const PinBox = () => {
  return (
    <>
      <h2 className="mx-8 text-2xl mt-8 font-bold">Send Pin</h2>
      <ol className="flex m-8 mt-[4px]">
        <li className="text-blue-500">
          <Link to="/dashboard">Home</Link>
        </li>
        &nbsp;/&nbsp;
        <li className="text-blue-500">
          <Link to="/#pin">Pin</Link>
        </li>
        &nbsp;/&nbsp;
        <li className="text-gray-500">
          <Link to="/team-tree#">Send Pin</Link>
        </li>
      </ol>

      <h3 className="font-bold mx-8">SEND PIN</h3>
      <div class="border-t border-gray-400 my-4 mx-8"></div>

      <div>
        <form className="w-96 bg-white m-8 shadow-md p-4 flex flex-col gap-6">
          <div className="flex flex-col gap-2 ">
            <label className="text-sm font-semibold">USERNAME</label>
            <input
              className="p-[4px_12px] border"
              type="text"
              placeholder="Enter Username"
            />
          </div>
          <div className="flex flex-col gap-2 ">
            <label className="text-sm font-semibold">SELECT PIN</label>
            <select className="p-[4px_12px] border">
              <option>Package2 ($101-$200)</option>
              <option>Package2 ($101-$200)</option>
              <option>Package2 ($101-$200)</option>
              <option>Package2 ($101-$200)</option>
              <option>Package2 ($101-$200)</option>
            </select>
          </div>

          <div className="flex flex-col gap-2 ">
            <label className="text-sm font-semibold">USERNAME</label>
            <input
              className="p-[4px_12px] border"
              type="text"
              placeholder="Enter Username"
            />
          </div>

          <button className="text-white p-[6px_14px] bg-[#5365CE] object-cover">
            TRANSFER
          </button>
        </form>
      </div>
    </>
  );
};

export default PinBox;
