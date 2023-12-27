import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen }) => {
  const sidebarClass = isOpen ? "block" : "hidden";

  const [dropdownOpen, setDropdownOpen] = useState({
    dropdown1: false,
    dropdown2: false,
    dropdown3: false,
    dropdown4: false,
    dropdown5: false,
    dropdown6: false,
  });

  const toggleDropdown = (dropdown) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [dropdown]: !prevState[dropdown],
    }));
  };

  return (
    <nav
      className={`bg-[#172B4D] text-white w-64 h-screen overflow-y-scroll scroll-smooth ${sidebarClass}`}
    >
      <div className="flex justify-center items-center p-4 gap-2 bg-white">
        <img
          className="w-[70px]"
          src="https://demo.mlmreadymade.com/binary_investment_tron_deposit/images/logo/logo.png"
        />
        <p className="text-lg text-[#555]">Admin</p>
      </div>

      <Link to="/dashboard" className="block py-2 px-4  text-[#7f9bcc] ">
        <li className=" p-[10px_15px] flex items-center gap-4  hover:text-white hover:bg-[#7f9bcc]">
          <i className="fa-solid fa-house"></i>
          <span>Dashboard</span>
        </li>
      </Link>

      <Link
        className=" block py-2 px-4  text-[#7f9bcc] "
        // onClick={toggleDropdown}
        onClick={() => toggleDropdown("dropdown1")}
      >
        <li className="p-[10px_15px] flex items-center gap-4  hover:text-white hover:bg-[#7f9bcc]">
          <i className="fa-solid fa-users"></i>
          <span>Users</span>
        </li>
        {dropdownOpen.dropdown1 && (
          <div className="">
            {/* Dropdown */}
            <ul
            // className={` ${
            //   isDropdownOpen ? "block" : "hidden"
            // } text-white pl-10`}
            >
              <li>
                <Link to="/users" className="block p-2 ml-10 hover:text-white">
                  All Users
                </Link>
              </li>
              <li>
                <Link
                  to="/users/admins"
                  className="block p-2 ml-10 hover:text-white"
                >
                  Users Rewards
                </Link>
              </li>
            </ul>
          </div>
        )}
      </Link>

      <Link
        className=" block py-2 px-4  text-[#7f9bcc] "
        // onClick={toggleDropdown}
        onClick={() => toggleDropdown("dropdown2")}
      >
        <li className="p-[10px_15px] flex items-center gap-4  hover:text-white hover:bg-[#7f9bcc]">
          <i className="fa-solid fa-network-wired"></i>
          <span>Network</span>
        </li>
        {dropdownOpen.dropdown2 && (
          <div className="">
            {/* Dropdown */}
            <ul
            // className={` ${
            //   isDropdownOpen ? "block" : "hidden"
            // } text-white pl-10`}
            >
              <li>
                <Link
                  to="/networks/generation_teem"
                  className="block p-2 ml-10 hover:text-white"
                >
                  Generaion Team
                </Link>
              </li>
              <li>
                <Link
                  to="/networks/tree"
                  className="block p-2 ml-10 hover:text-white"
                >
                  Users Tree
                </Link>
              </li>
            </ul>
          </div>
        )}
      </Link>

      <Link
        className=" block py-2 px-4  text-[#7f9bcc]  "
        // onClick={toggleDropdown}
        onClick={() => toggleDropdown("dropdown3")}
      >
        <li className="p-[10px_15px] flex items-center gap-4 hover:text-white hover:bg-[#7f9bcc]">
          <i className="fa-solid fa-map-pin"></i>
          <span>E-pin</span>
        </li>
        {dropdownOpen.dropdown3 && (
          <div className="">
            {/* Dropdown */}
            <ul
            // className={` ${
            //   isDropdownOpen ? "block" : "hidden"
            // } text-white pl-10`}
            >
              <li>
                <Link
                  to="/pin/send"
                  className="block p-2 ml-10 hover:text-white "
                >
                  Send
                </Link>
              </li>
              <li>
                <Link
                  to="/pin/history"
                  className="block p-2 ml-10 hover:text-white"
                >
                  History
                </Link>
              </li>
              <li>
                <Link
                  to="/pin/pinbox"
                  className="block p-2 ml-10 hover:text-white"
                >
                  Pin Box
                </Link>
              </li>
              <li>
                <Link
                  to="/pin/all"
                  className="block p-2 ml-10 hover:text-white"
                >
                  All
                </Link>
              </li>
              <li>
                <Link
                  to="/pin/create"
                  className="block p-2 ml-10 hover:text-white"
                >
                  Create
                </Link>
              </li>
            </ul>
          </div>
        )}
      </Link>

      <Link
        className=" block py-2 px-4  text-[#7f9bcc] "
        // onClick={toggleDropdown}
        onClick={() => toggleDropdown("dropdown4")}
      >
        <li className="p-[10px_15px] flex items-center gap-4  hover:text-white hover:bg-[#7f9bcc]">
          <i className="fa-solid fa-money-bill-transfer"></i>
          <span>Withdrawals</span>
        </li>
        {dropdownOpen.dropdown4 && (
          <div className="">
            {/* Dropdown */}
            <ul
            // className={` ${
            //   isDropdownOpen ? "block" : "hidden"
            // } text-white pl-10`}
            >
              <li>
                <Link
                  to="/withdrawals/pending"
                  className="block p-2 ml-10 hover:text-white"
                >
                  Pending
                </Link>
              </li>
              <li>
                <Link
                  to="/withdrawals/approved"
                  className="block p-2 ml-10 hover:text-white"
                >
                  Approved
                </Link>
              </li>
              <li>
                <Link
                  to="/withdrawals/cancelled"
                  className="block p-2 ml-10 hover:text-white"
                >
                  Cancelled
                </Link>
              </li>
            </ul>
          </div>
        )}
      </Link>

      <Link to="/orders" className="block py-2 px-4  text-[#7f9bcc] ">
        <li className=" p-[10px_15px] flex items-center gap-4  hover:text-white hover:bg-[#7f9bcc]">
          <i class="fa-solid fa-database"></i>
          <span>Orders</span>
        </li>
      </Link>

      <Link to="/income" className="block py-2 px-4  text-[#7f9bcc] ">
        <li className=" p-[10px_15px] flex items-center gap-4  hover:text-white hover:bg-[#7f9bcc]">
          <i class="fa-solid fa-wallet"></i>
          <span>Income</span>
        </li>
      </Link>

      <Link
        className=" block py-2 px-4  text-[#7f9bcc] "
        // onClick={toggleDropdown}
        onClick={() => toggleDropdown("dropdown5")}
      >
        <li className="p-[10px_15px] flex items-center gap-4  hover:text-white hover:bg-[#7f9bcc]">
          <i className="fa-solid fa-life-ring"></i>
          <span>Support</span>
        </li>
        {dropdownOpen.dropdown5 && (
          <div className="">
            {/* Dropdown */}
            <ul
            // className={` ${
            //   isDropdownOpen ? "block" : "hidden"
            // } text-white pl-10`}
            >
              <li>
                <Link
                  to="/support/pending"
                  className="block p-2 ml-10 hover:text-white"
                >
                  Pending
                </Link>
              </li>
              <li>
                <Link
                  to="/support/approved"
                  className="block p-2 ml-10 hover:text-white"
                >
                  Approved
                </Link>
              </li>
            </ul>
          </div>
        )}
      </Link>

      <Link to="/contact" className="block py-2 px-4  text-[#7f9bcc] ">
        <li className=" p-[10px_15px] flex items-center gap-4  hover:text-white hover:bg-[#7f9bcc]">
          <i className="fa-solid fa-phone"></i>
          <span>Contact Us</span>
        </li>
      </Link>

      <Link
        className=" block py-2 px-4  text-[#7f9bcc]  "
        // onClick={toggleDropdown}
        onClick={() => toggleDropdown("dropdown6")}
      >
        <li className="p-[10px_15px] flex items-center gap-4 hover:text-white hover:bg-[#7f9bcc]">
          <i className="fa-solid fa-gear"></i>
          <span>Settings</span>
        </li>
        {dropdownOpen.dropdown6 && (
          <div className="">
            {/* Dropdown */}
            <ul
            // className={` ${
            //   isDropdownOpen ? "block" : "hidden"
            // } text-white pl-10`}
            >
              <li>
                <Link
                  to="/settings/general_setting"
                  className="block p-2 ml-10 hover:text-white "
                >
                  General Setting
                </Link>
              </li>
              <li>
                <Link
                  to="/setting/plan_setting"
                  className="block p-2 ml-10 hover:text-white"
                >
                  Plan Setting
                </Link>
              </li>
              <li>
                <Link
                  to="/setting/page_setup"
                  className="block p-2 ml-10 hover:text-white"
                >
                  Page Setup
                </Link>
              </li>
              <li>
                <Link
                  to="/setting/news&event"
                  className="block p-2 ml-10 hover:text-white"
                >
                  News and Event
                </Link>
              </li>
            </ul>
          </div>
        )}
      </Link>

      <Link to="/changePassword" className="block py-2 px-4  text-[#7f9bcc] ">
        <li className=" p-[10px_15px] flex items-center gap-4  hover:text-white hover:bg-[#7f9bcc]">
          <i className="fa-solid fa-key"></i>
          <span>Change Password</span>
        </li>
      </Link>

      <Link to="/signin_form" className="block py-2 px-4  text-[#7f9bcc] ">
        <li className=" p-[10px_15px] flex items-center gap-4  hover:text-white hover:bg-[#7f9bcc]">
          <i class="fa-solid fa-power-off"></i>
          <span>Logout</span>
        </li>
      </Link>
    </nav>
  );
};

export default Sidebar;
