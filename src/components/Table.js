import React from "react";

const Table = () => {
  const tableStyle = {
    borderCollapse: "collapse",
    width: "100%",
  };

  const cellStyle = "border-t border-b px-4 py-2";

  return (
    <>
      <div className="flex space-x-4 m-8 ">
        {/* Card 1 */}
        <div className="flex-1 bg-white rounded-md shadow-md p-4">
          <div className="font-semibold text-lg mb-4">Investment</div>
          <div className="bg-gray-100 p-4">
            <div id="loader_section" className="">
              <div id="loader_img_section" className="">
                <div id="bvdata" className="">
                  <div className="overflow-x-auto">
                    <table className="min-w-full table-auto table-sm">
                      <tbody>
                        <tr>
                          <td>
                            <a
                              href="https://demo.mlmreadymade.com/binary_investment_tron_deposit/admin/order"
                              className="text-blue-500 hover:underline"
                            >
                              Total
                            </a>
                          </td>
                          <td>$&nbsp;0</td>
                        </tr>
                        <tr>
                          <td>
                            <a
                              href="https://demo.mlmreadymade.com/binary_investment_tron_deposit/admin/order"
                              className="text-blue-500 hover:underline"
                            >
                              Today
                            </a>
                          </td>
                          <td>$&nbsp;0</td>
                        </tr>
                        <tr>
                          <td>
                            <a
                              href="https://demo.mlmreadymade.com/binary_investment_tron_deposit/admin/order"
                              className="text-blue-500 hover:underline"
                            >
                              Yesterday
                            </a>
                          </td>
                          <td>$&nbsp;0</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex-1 bg-white rounded-md shadow-md p-4">
          <div className="font-semibold text-lg mb-4">Investment</div>
          <div className="bg-gray-100 p-4">
            <div id="loader_section" className="">
              <div id="loader_img_section" className="">
                <div id="bvdata" className="">
                  <div className="overflow-x-auto">
                    <table className="min-w-full table-auto table-sm">
                      <tbody>
                        <tr>
                          <td>
                            <a
                              href="https://demo.mlmreadymade.com/binary_investment_tron_deposit/admin/order"
                              className="text-blue-500 hover:underline"
                            >
                              Total
                            </a>
                          </td>
                          <td>$&nbsp;0</td>
                        </tr>
                        <tr>
                          <td>
                            <a
                              href="https://demo.mlmreadymade.com/binary_investment_tron_deposit/admin/order"
                              className="text-blue-500 hover:underline"
                            >
                              Today
                            </a>
                          </td>
                          <td>$&nbsp;0</td>
                        </tr>
                        <tr>
                          <td>
                            <a
                              href="https://demo.mlmreadymade.com/binary_investment_tron_deposit/admin/order"
                              className="text-blue-500 hover:underline"
                            >
                              Yesterday
                            </a>
                          </td>
                          <td>$&nbsp;0</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-md p-4 m-8">
        <h2 className="text-xl font-semibold mb-4 ml-2">Your Table Title</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b text-left">Column 1</th>
                <th className="py-2 px-4 border-b text-left">Column 2</th>
                <th className="py-2 px-4 border-b text-left">Column 3</th>
                <th className="py-2 px-4 border-b text-left">Column 4</th>
                <th className="py-2 px-4 border-b text-left">Column 5</th>
              </tr>
            </thead>
            <tbody>
              {/* Example row 1 */}
              <tr>
                <td className="py-2 px-4 border-b">Data 1</td>
                <td className="py-2 px-4 border-b">Data 2</td>
                <td className="py-2 px-4 border-b">Data 3</td>
                <td className="py-2 px-4 border-b">Data 4</td>
                <td className="py-2 px-4 border-b">Data 5</td>
              </tr>

              {/* Example row 2 */}
              <tr>
                <td className="py-2 px-4 border-b">Data 6</td>
                <td className="py-2 px-4 border-b">Data 7</td>
                <td className="py-2 px-4 border-b">Data 8</td>
                <td className="py-2 px-4 border-b">Data 9</td>
                <td className="py-2 px-4 border-b">Data 10</td>
              </tr>
              {/* Example row 3 */}
              <tr>
                <td className="py-2 px-4 border-b">Data 6</td>
                <td className="py-2 px-4 border-b">Data 7</td>
                <td className="py-2 px-4 border-b">Data 8</td>
                <td className="py-2 px-4 border-b">Data 9</td>
                <td className="py-2 px-4 border-b">Data 10</td>
              </tr>
              {/* Example row 4 */}
              <tr>
                <td className="py-2 px-4 border-b">Data 6</td>
                <td className="py-2 px-4 border-b">Data 7</td>
                <td className="py-2 px-4 border-b">Data 8</td>
                <td className="py-2 px-4 border-b">Data 9</td>
                <td className="py-2 px-4 border-b">Data 10</td>
              </tr>

              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Table;
