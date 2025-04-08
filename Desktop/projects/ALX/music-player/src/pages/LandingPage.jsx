import React from "react";
import { Headphones } from "lucide-react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-purple-900 text-white px-4">
      <div className="text-center space-y-6">
        <div className="flex justify-center">
          <Headphones className="w-64 h-32 text-indigo-500" />
        </div>
        <h1 className="text-6xl font-extrabold tracking-tight">Misgana Music Player</h1>
        <Link
          to="/login"
          className="inline-block bg-indigo-700 hover:bg-indigo-800 text-white px-8 py-4 rounded-full text-xl font-semibold transition"
        >
          Login
        </Link>
        <p className="text-sm">
          Don't have an account?{" "}
          <Link to="/signup" className="text-indigo-400 hover:underline hover:font-bold">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
