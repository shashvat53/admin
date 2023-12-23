import React from "react";

const Sidebar = () => {
  return (
    <>
      <div className="w-[20%] h-screen">
        <div className="flex justify-center items-center p-4 gap-2">
          <img
            className="w-[70px]"
            src="https://demo.mlmreadymade.com/binary_investment_tron_deposit/images/logo/logo.png"
          />
          <p className="text-lg text-[#555]">Admin</p>
        </div>
        <div className="bg-[#172B4D]  h-[92%]">
          <ul className="  flex flex-col gap-3">
            <li className=" p-[10px_15px] text-[#7f9bcc] flex items-center gap-4 hover:text-white hover:bg-[#7f9bcc]">
              <i className="fa-solid fa-house"></i>
              <span>Dashboard</span>
            </li>
            <li className="p-[10px_15px] text-[#7f9bcc] flex items-center gap-4 hover:text-white hover:bg-[#7f9bcc]">
              <i className="fa-solid fa-house"></i>
              <span>Networks</span>
            </li>
            <li className="p-[10px_15px] text-[#7f9bcc] flex items-center gap-4 hover:text-white hover:bg-[#7f9bcc]">
              <i className="fa-solid fa-house"></i>
              <span>Withdrawals</span>
            </li>
            <li className="p-[10px_15px] text-[#7f9bcc] flex items-center gap-4 hover:text-white hover:bg-[#7f9bcc]">
              <i className="fa-solid fa-house"></i>
              <span>Orders</span>
            </li>
            <li className="p-[10px_15px] text-[#7f9bcc] flex items-center gap-4 hover:text-white hover:bg-[#7f9bcc]">
              <i className="fa-solid fa-house"></i>
              <span>Income</span>
            </li>
            <li className="p-[10px_15px] text-[#7f9bcc] flex items-center gap-4 hover:text-white hover:bg-[#7f9bcc]">
              <i className="fa-solid fa-house"></i>
              <span>Fund</span>
            </li>
            <li className="p-[10px_15px] text-[#7f9bcc] flex items-center gap-4 hover:text-white hover:bg-[#7f9bcc]">
              <i className="fa-solid fa-house"></i>
              <span>Support</span>
            </li>
            <li className="p-[10px_15px] text-[#7f9bcc] flex items-center gap-4 hover:text-white hover:bg-[#7f9bcc]">
              <i className="fa-solid fa-house"></i>
              <span>Contact Us</span>
            </li>
            <li className="p-[13px_15px] text-[#7f9bcc] flex items-center gap-4 hover:text-white hover:bg-[#7f9bcc]">
              <i className="fa-solid fa-house"></i>
              <span>Settings</span>
            </li>
            <li className="p-[13px_15px] text-[#7f9bcc] flex items-center gap-4 hover:text-white hover:bg-[#7f9bcc]">
              <i className="fa-solid fa-house"></i>
              <span>Change Password</span>
            </li>
            <li className="p-[13px_15px] text-[#7f9bcc] flex items-center gap-4 hover:text-white hover:bg-[#7f9bcc]">
              <i className="fa-solid fa-house"></i>
              <span>Log Out</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
