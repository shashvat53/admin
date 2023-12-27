import React from "react";
import Table from "../components/Table";

const Dashboard = () => {
  return (
    <>
      <div className="flex gap-4 flex-wrap m-8">
        <div className="w-[270px] p-4 bg-gradient-to-r from-[#FA808D] to-[#FED946] flex items-center text-white justify-between rounded-md">
          <div>
            <span className="text-lg ">Total User</span>
            <h3 className="text-2xl font-bold">2</h3>
          </div>
          <i className="fa-solid fa-users text-2xl"></i>
        </div>

        {/* <!-- Row 1, Column 2 --> */}
        <div className="w-[270px] p-4 bg-gradient-to-r from-[#0DB293] to-[#91C841] flex items-center text-white justify-between rounded-md">
          <div>
            <span className="text-lg ">Total User</span>
            <h3 className="text-2xl font-bold">2</h3>
          </div>
          <i className="fa-solid fa-users text-2xl"></i>
        </div>

        {/* <!-- Row 2, Column 1 --> */}
        <div className="w-[270px] p-4 bg-gradient-to-r from-[#F650A0] to-[#FF7578] flex items-center text-white justify-between rounded-md">
          <div>
            <span className="text-lg ">Total User</span>
            <h3 className="text-2xl font-bold">2</h3>
          </div>
          <i className="fa-solid fa-users text-2xl"></i>
        </div>

        {/* <!-- Row 2, Column 2 --> */}
        <div className="w-[270px] p-4 bg-gradient-to-r from-[#4BB0FE] to-[#03F0FE] flex items-center text-white justify-between rounded-md">
          <div>
            <span className="text-lg ">Total User</span>
            <h3 className="text-2xl font-bold">2</h3>
          </div>
          <i className="fa-solid fa-users text-2xl"></i>
        </div>
      </div>

      <div className="flex flex-wrap gap-8 m-8">
        <div className="bg-[#2DCE89] p-[12px_24px] w-[350px] text-white rounded-md">
          <div className="flex flex-col items-center pb-2 gap-2">
            <i class="fa-solid fa-money-bill-1 text-2xl"></i>
            {/* <p>\f0d6</p> */}
            <h3 className="text-2xl font-bold">withdrawal</h3>
          </div>

          <div class="border-t border-gray-300"></div>

          <div className="flex flex-col  items-center pt-2 gap-2">
            <p className="text-lg">Approved</p>
            <p className="font-bold">0</p>
          </div>
        </div>

        <div className="bg-[#11CDEF] p-[12px_24px] w-[350px] text-white rounded-md">
          <div className="flex flex-col items-center pb-2 gap-2">
            <i class="fa-solid fa-money-bill-1 text-2xl"></i>
            {/* <p>\f0d6</p> */}
            <h3 className="text-2xl font-bold">withdrawal</h3>
          </div>

          <div class="border-t border-gray-300"></div>

          <div className="flex flex-col  items-center pt-2 gap-2">
            <p className="text-lg">Approved</p>
            <p className="font-bold">0</p>
          </div>
        </div>

        <div className="bg-[#F5365C] p-[12px_24px] w-[350px] text-white rounded-md">
          <div className="flex flex-col items-center pb-2 gap-2">
            <i class="fa-solid fa-money-bill-1 text-2xl"></i>
            {/* <p>\f0d6</p> */}
            <h3 className="text-2xl font-bold">withdrawal</h3>
          </div>

          <div class="border-t border-gray-300"></div>

          <div className="flex flex-col  items-center pt-2 gap-2">
            <p className="text-lg">Approved</p>
            <p className="font-bold">0</p>
          </div>
        </div>
      </div>

      <Table />
    </>
  );
};

export default Dashboard;
