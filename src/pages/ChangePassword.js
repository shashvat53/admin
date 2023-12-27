import React from "react";
import { Link } from "react-router-dom";

const ChangePassword = () => {
  return (
    <>
      <h2 className="mx-8 text-2xl mt-8 font-bold">Change Password</h2>
      <ol className="flex m-8 mt-[4px]">
        <li className="text-blue-500">
          <Link to="/dashboard">Home</Link>
        </li>
        &nbsp;/&nbsp;
        <li className="text-blue-500">
          <Link to="/#Admin">Admin</Link>
        </li>
        &nbsp;/&nbsp;
        <li className="text-gray-500">
          <Link
            to="/#ChangePassword
"
          >
            Change Password
          </Link>
        </li>
      </ol>

      <h3 className="font-bold mx-8">CHANGE PASSWORD</h3>
      <div class="border-t border-gray-400 my-4 mx-8"></div>

      <div>
        <form className="w-96 bg-white m-8 shadow-md p-4 flex flex-col gap-6">
          <div className="flex flex-col gap-2 ">
            <label className="text-sm font-semibold">OLD PASSWORD</label>
            <input
              className="p-[4px_12px] border"
              type="text"
              placeholder="Enter Old Password"
            />
          </div>
          <div className="flex flex-col gap-2 ">
            <label className="text-sm font-semibold">NEW PASSWORD</label>
            <input
              className="p-[4px_12px] border"
              type="text"
              placeholder="Enter New Password"
            />
          </div>
          <div className="flex flex-col gap-2 ">
            <label className="text-sm font-semibold">
              CONFIRM NEW PASSWORD
            </label>
            <input
              className="p-[4px_12px] border"
              type="text"
              placeholder="Enter Confirm Password"
            />
          </div>

          <button className="text-white p-[6px_14px] bg-[#5365CE] object-cover">
            SET PASSWORD
          </button>
        </form>
      </div>
      <h3 className="text-center mb-4">
        Copyright © 2023 Binary investment demo
      </h3>
    </>
  );
};

export default ChangePassword;
