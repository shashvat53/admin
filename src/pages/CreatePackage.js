import React from "react";
import { Link } from "react-router-dom";

const CreatePackage = () => {
  return (
    <>
      <h2 className="mx-8 text-2xl mt-8 font-bold">Create Package</h2>
      <ol className="flex m-8 mt-[4px]">
        <li className="text-blue-500">
          <Link to="/dashboard">Home</Link>
        </li>
        &nbsp;/&nbsp;
        <li className="text-blue-500">
          <Link to="/#pin">Package</Link>
        </li>
        &nbsp;/&nbsp;
        <li className="text-gray-500">
          <Link to="/team-tree#">Create Package</Link>
        </li>
      </ol>

      <h3 className="font-bold mx-8">CREATE PACKAGE</h3>
      <div class="border-t border-gray-400 my-4 mx-8"></div>

      <div>
        <form className="w-96 bg-white m-8 shadow-md p-4 flex flex-col gap-6">
          <div className="flex flex-col gap-2 ">
            <label className="text-sm font-semibold">PACKAGE NAME</label>
            <input
              className="p-[4px_12px] border"
              type="text"
              placeholder="Package Name"
            />
          </div>
          <div className="flex flex-col gap-2 ">
            <label className="text-sm font-semibold">PACKAGE RATE</label>
            <input
              className="p-[4px_12px] border"
              type="text"
              placeholder="Package Rate"
            />
          </div>
          <div className="flex flex-col gap-2 ">
            <label className="text-sm font-semibold">BV</label>
            <input
              className="p-[4px_12px] border"
              type="text"
              placeholder="Busiiness Volumn"
            />
          </div>
          <div className="flex flex-col gap-2 ">
            <label className="text-sm font-semibold">PV</label>
            <input
              className="p-[4px_12px] border"
              type="text"
              placeholder="Pin Value"
            />
          </div>

          <button className="text-white p-[6px_14px] bg-[#5365CE] object-cover">
            CREATE
          </button>
        </form>
      </div>
      <h3 className="text-center mb-4">
        Copyright © 2023 Binary investment demo
      </h3>
    </>
  );
};

export default CreatePackage;
