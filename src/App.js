// import React from "react";
// // import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import Dashboard from "./pages/Dashboard";
// // import Users from "./pages/Users";
// // import Settings from "./pages/Settings";
// import Nav from "./components/Nav";
// import Users from "./pages/Users";
// import Home from "./pages/Home";

// const App = () => {
//   const appRouter = createBrowserRouter([
//     {
//       path: "/",
//       element: <Home />,
//     },
//   ]);
//   return <RouterProvider router={appRouter} />;
// };

// export default App;

import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Nav from "./components/Nav";
import Dashboard from "./pages/Dashboard";
// import Settings from "./pages/Settings";
import Users from "./pages/Users";
import Networks from "./pages/Networks";
import Withdrawals from "./pages/Withdrawals";
import UserRewards from "./pages/UserRewards";
import GenerationTeem from "./pages/GenerationTeem";
import Tree from "./pages/Tree";
import PinBox from "./components/PinBox";
import History from "./pages/History";
import PinBox3 from "./pages/PinBox3";
import AllPackages from "./pages/AllPackages";
import CreatePackage from "./pages/CreatePackage";
import Pending from "./pages/Pending";
import Approved from "./pages/Approved";
import Cancelled from "./pages/Cancelled";
import Orders from "./pages/Orders";
import Income from "./pages/Income";
import SupportPending from "./pages/SupportPending";
import SupportApproved from "./pages/SupportApproved";
import Contact from "./pages/Contact";
import GeneralSetting from "./pages/GeneralSetting";
import PlanSetting from "./pages/PlanSetting";
import NewsEvent from "./pages/NewsEvent";
import ChangePassword from "./pages/ChangePassword";
import SignInForm from "./components/SignInForm";

const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [signIn, setSignIn] = useState(false);

  const toggleSidebar = (e) => {
    setSidebarOpen((isSidebarOpen) => !isSidebarOpen);
  };

  return (
    <>
      {signIn ? (
        <Router>
          <div className="flex h-screen bg-gray-100">
            <Sidebar isOpen={isSidebarOpen} />

            <div className="flex-1 flex flex-col overflow-hidden">
              <Nav toggleSidebar={toggleSidebar} />

              <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
                <Routes>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/users" element={<Users />} />
                  <Route path="/users/admins" element={<UserRewards />} />
                  <Route path="/networks" element={<Networks />} />
                  <Route
                    path="/networks/generation_teem"
                    element={<GenerationTeem />}
                  />
                  <Route path="/networks/tree" element={<Tree />} />
                  <Route path="/pin/send" element={<PinBox />} />
                  <Route path="/pin/history" element={<History />} />
                  <Route path="/pin/pinbox" element={<PinBox3 />} />
                  <Route path="/pin/all" element={<AllPackages />} />
                  <Route path="/pin/create" element={<CreatePackage />} />
                  <Route path="/withdrawals/pending" element={<Pending />} />
                  <Route path="/withdrawals/approved" element={<Approved />} />
                  <Route
                    path="/withdrawals/cancelled"
                    element={<Cancelled />}
                  />
                  <Route path="/orders" element={<Orders />} />
                  <Route path="/income" element={<Income />} />
                  <Route path="/support/pending" element={<SupportPending />} />
                  <Route
                    path="/support/approved"
                    element={<SupportApproved />}
                  />
                  <Route path="/contact" element={<Contact />} />
                  <Route
                    path="/settings/general_setting"
                    element={<GeneralSetting />}
                  />
                  <Route
                    path="/setting/plan_setting"
                    element={<PlanSetting />}
                  />
                  <Route path="/setting/news&event" element={<NewsEvent />} />
                  <Route path="/changePassword" element={<ChangePassword />} />

                  {/* Add more routes as needed */}
                </Routes>
              </main>
            </div>
          </div>
        </Router>
      ) : (
        <SignInForm />
      )}
    </>
  );
};

export default App;
