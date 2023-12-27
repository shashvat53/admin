import React, { useState } from "react";

const SignInForm = ({}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSignIn = (e) => {
    e.preventDefault();
    // Add your sign-in logic here
    console.log(
      "Signing in with:",
      email,
      password,
      "Remember Me:",
      rememberMe
    );
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-[#172B4D]">
      <form className="bg-white p-8 shadow-md rounded-md w-96">
        <div className="w-full flex flex-col justify-center items-center ">
          <img
            className="w-[100px]"
            src="https://demo.mlmreadymade.com/binary_investment_tron_deposit/images/logo/logo.png"
          />
          <h2 className="text-2xl font-semibold mb-4">SIGN IN</h2>
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-600 text-sm font-medium"
          >
            USERNAME
          </label>
          <input
            type="email"
            id="email"
            className="w-full mt-1 p-2 border rounded-md"
            placeholder="name"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-gray-600 text-sm font-medium"
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            className="w-full mt-1 p-2 border rounded-md"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="rememberMe" className="flex items-center">
            <input
              type="checkbox"
              id="rememberMe"
              className="mr-2"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            <span className="text-sm text-gray-600">Remember me</span>
          </label>
        </div>

        <div className="mb-4 ">
          <a href="#" className="text-sm text-blue-500 hover:underline">
            Forgot your password?
          </a>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          onClick={handleSignIn}
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignInForm;
