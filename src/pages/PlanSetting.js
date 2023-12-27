import React from "react";
import { Link } from "react-router-dom";

const PlanSetting = () => {
  return (
    <>
      <ol className="flex m-8 ">
        <li className="text-blue-500 hover:text-blue-700">
          <Link to="/dashboard">Home</Link>
        </li>
        &nbsp;/&nbsp;
        <li className="text-blue-500 hover:text-blue-700">
          <Link to="/#plan_setting">order</Link>
        </li>
      </ol>

      <div className="m-8 flex flex-wrap w-full gap-2">
        <div className="bg-white p-[6px_14px] w-[45%]">
          <h1 className="text-3xl font-bold text-center text-[#172B4D]">
            Direct Sponsor Plan Setting
          </h1>
          <div className="bg-[#172B4D] text-right text-[12px] p-[10px_18px] flex flex-col gap-4 my-[12px]">
            <p className="text-white">DIRECT SPONSOR INCOME(%)</p>
            <div class="border-t border-gray-400"></div>
            <input
              type="text"
              value={5}
              className="text-right p-[4px_8px] rounded-md"
            />
          </div>
          <button className="bg-[#07B3D2] text-white p-[6px_14px] rounded-md">
            CHANGE
          </button>
        </div>

        <div className="bg-white p-[6px_14px] w-[45%]">
          <h1 className="text-3xl font-bold text-center text-[#172B4D]">
            RoI Plan Setting
          </h1>
          <div className="bg-[#172B4D] text-right text-[12px] p-[10px_18px] flex flex-col gap-4 my-[12px]">
            <p className="text-white">ROI INCOME(%)</p>
            <div class="border-t border-gray-400"></div>
            <input
              type="text"
              value={1}
              className="text-right p-[4px_8px] rounded-md"
            />
          </div>
          <button className="bg-[#07B3D2] text-white p-[6px_14px] rounded-md">
            CHANGE
          </button>
        </div>
      </div>

      {/* Table input */}
      <div className="w-full  m-8 shadow-md bg-white p-[12px_24px]">
        <h1 className="text-center text-3xl font-bold text-[#172B4D] mb-[12px]">
          Reward Plan Setting
        </h1>
        <table className="w-[95%] mx-auto border-collapse border border-white bg-[#172B4D]">
          <thead>
            <tr className="text-white">
              <th className="border-b border-gray-300 p-2">S. NO</th>
              <th className="border-b border-gray-300 p-2">Column 2</th>
              <th className="border-b border-gray-300 p-2">Column 3</th>
              <th className="border-b border-gray-300 p-2">Column 4</th>
              <th className="border-b border-gray-300 p-2">Column 5</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 10 }).map((_, rowIndex) => (
              <tr key={rowIndex}>
                <td className="text-white border-b border-gray-300 p-2 text-center">
                  {rowIndex}
                </td>
                <td className="border-b   p-2">
                  <input
                    type="text"
                    className="w-full p-1 border border-gray-300"
                  />
                </td>
                <td className="border-b   p-2">
                  <input
                    type="text"
                    className="w-full p-1 border border-gray-300"
                  />
                </td>
                <td className="border-b   p-2">
                  <input
                    type="text"
                    className="w-full p-1 border border-gray-300"
                  />
                </td>
                <td className="border-b   p-2">
                  <input
                    type="text"
                    className="w-full p-1 border border-gray-300"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="bg-[#07B3D2] ml-8 mt-[12px] text-white p-[6px_14px] rounded-md">
          CHANGE
        </button>
      </div>
      <h3 className="text-center mb-4">
        Copyright © 2023 Binary investment demo
      </h3>
    </>
  );
};

export default PlanSetting;
