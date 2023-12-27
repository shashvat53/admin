import React from "react";
import UserFilterForm from "../components/UserFilterForm";

const Users = () => {
  const tableData = [
    // Sample data, replace with your actual data
    [
      "Data 1",
      "Data 2",
      "Data 3",
      "Data 4",
      "Data 5",
      "Data 6",
      "Data 7",
      "Data 8",
      "Data 9",
      "Data 10",
      "Data 11",
      "Data 12",
      "Data 13",
    ],
    [
      "Data 1",
      "Data 2",
      "Data 3",
      "Data 4",
      "Data 5",
      "Data 6",
      "Data 7",
      "Data 8",
      "Data 9",
      "Data 10",
      "Data 11",
      "Data 12",
      "Data 13",
    ],
    [
      "Data 1",
      "Data 2",
      "Data 3",
      "Data 4",
      "Data 5",
      "Data 6",
      "Data 7",
      "Data 8",
      "Data 9",
      "Data 10",
      "Data 11",
      "Data 12",
      "Data 13",
    ],
    [
      "Data 1",
      "Data 2",
      "Data 3",
      "Data 4",
      "Data 5",
      "Data 6",
      "Data 7",
      "Data 8",
      "Data 9",
      "Data 10",
      "Data 11",
      "Data 12",
      "Data 13",
    ],
    [
      "Data 1",
      "Data 2",
      "Data 3",
      "Data 4",
      "Data 5",
      "Data 6",
      "Data 7",
      "Data 8",
      "Data 9",
      "Data 10",
      "Data 11",
      "Data 12",
      "Data 13",
    ],
    [
      "Data 1",
      "Data 2",
      "Data 3",
      "Data 4",
      "Data 5",
      "Data 6",
      "Data 7",
      "Data 8",
      "Data 9",
      "Data 10",
      "Data 11",
      "Data 12",
      "Data 13",
    ],
    [
      "Data 1",
      "Data 2",
      "Data 3",
      "Data 4",
      "Data 5",
      "Data 6",
      "Data 7",
      "Data 8",
      "Data 9",
      "Data 10",
      "Data 11",
      "Data 12",
      "Data 13",
    ],
  ];

  return (
    <>
      <UserFilterForm />

      <div className="bg-white shadow-md rounded-md p-4 m-8">
        <h2 className="text-lg font-semibold mb-4 text-right">
          | All Users:(6)
        </h2>
        <div className="overflow-x-scroll ">
          <table className="min-w-full table-auto border">
            <thead>
              <tr className="bg-gray-200">
                {Array.from({ length: 13 }, (_, index) => (
                  <th key={index} className="border p-2">
                    Column {index + 1}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, rowIndex) => (
                <tr key={rowIndex}>
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

      <div>
        <h3 className="text-center mb-4">
          Copyright © 2023 Binary investment demo
        </h3>
      </div>
    </>
  );
};

export default Users;
