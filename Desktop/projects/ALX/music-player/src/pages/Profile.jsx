import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import TrackItem from "../components/TrackList"; 

const Profile = () => {
  const { user } = useAuth();
  const [recentlyPlayed, setRecentlyPlayed] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("recentlyPlayed");
    if (stored) {
      setRecentlyPlayed(JSON.parse(stored));
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">User Profile</h1>

        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">📧 Email:</h2>
          <p className="mb-4 text-gray-300">{user?.email || "Guest"}</p>

          <h2 className="text-xl font-semibold mb-2">🎧 Recently Played:</h2>
          {recentlyPlayed.length > 0 ? (
            <div className="space-y-3">
              {recentlyPlayed.map((track) => (
                <TrackItem key={track.id} track={track} />
              ))}
            </div>
          ) : (
            <p className="text-gray-400 italic">No recently played tracks found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
