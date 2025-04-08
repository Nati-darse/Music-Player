import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // We'll create this

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Frontend validation
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    // Mock login - replace with real API call if needed
    login(email); // We'll just store the email as "user"
    navigate("/home"); // Redirect to home after login
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-purple-900 text-white px-4">
      <div className="w-full max-w-md bg-gradient-to-br from-gray-800 to-purple-800 p-8 rounded-2xl shadow-lg space-y-6">
        <h2 className="text-2xl font-bold text-center">Login</h2>

        {error && (
          <div className="bg-red-500/20 text-red-200 p-3 rounded text-sm">
            {error}
          </div>
        )}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded bg-gray-700 text-white outline-none focus:ring-2 ring-indigo-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-2 rounded bg-gray-700 text-white outline-none focus:ring-2 ring-indigo-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 rounded font-semibold transition"
          >
            Log In
          </button>
        </form>
        <p className="text-sm text-center">
          Don't have an account?{" "}
          <Link to="/signup" className="text-indigo-400 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
