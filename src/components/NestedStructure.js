import React from "react";
import { Link } from "react-router-dom";
const TreeNode = ({ label, children }) => (
  <div className="flex flex-col items-center space-y-2">
    <img
      src="https://demo.mlmreadymade.com/binary_investment/images/users/tree_user.png"
      alt="Tree"
      className="w-8 h-8"
    />
    <div className="flex flex-col items-center">
      <p className="font-bold">{label}</p>
      {children && <div className="mt-2 space-y-2">{children}</div>}
    </div>
  </div>
);

const NestedStructure = () => (
  <div className="p-4">
    {/* <h2 className="text-2xl font-bold mb-4">Image Node Tree</h2>

    */}

    <div className="flex mb-4 flex-wrap gap-4 m-8">
      {/* Input Fields */}
      <input type="text" className="flex-1 border p-2 " placeholder="Input 1" />
      <input type="text" className="flex-1 border p-2 " placeholder="Input 2" />

      <input
        type="submit"
        name="submit"
        className="border  bg-gray-300 p-[6px_12px]"
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

    <div className="flex flex-col items-center">
      <TreeNode label="Root">
        <img
          className="w-[30rem]"
          src="https://demo.mlmreadymade.com/binary_investment/images/users/arrow.png"
        />
        <div className="flex justify-between  ">
          <div className="absolute left-[36%]">
            <TreeNode label="Child 1">
              <img
                className="w-[10rem]"
                src="https://demo.mlmreadymade.com/binary_investment/images/users/arrow.png"
              />
              <div className="flex gap-5 ">
                <TreeNode label="Grandchild 1" />
                <TreeNode label="Grandchild 2" />
              </div>
            </TreeNode>
          </div>
          <div className="absolute right-[19%]">
            <TreeNode label="Child 2">
              <img
                className="w-[10rem] relative"
                src="https://demo.mlmreadymade.com/binary_investment/images/users/arrow.png"
              />
              <div className="flex gap-5">
                <TreeNode label="Grandchild 3" />
                <TreeNode label="Grandchild 4" />
              </div>
            </TreeNode>
          </div>
        </div>
      </TreeNode>
    </div>
  </div>
);

export default NestedStructure;
