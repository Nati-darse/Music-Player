// src/pages/Home.jsx
import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import TrackList from "../components/TrackList";
import MusicPlayer from "../components/MusicPlayer";
import ErrorMessage from "../components/ErrorMessage";
import LoadingSpinner from "../components/LoadingSpinner";

const Home = () => {
  const [query, setQuery] = useState("");
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchTracks = async () => {
    if (!query) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`https://api.deezer.com/search?q=${query}`);
      const data = await res.json();
      if (data && data.data && data.data.length > 0) {
        setTracks(data.data);
      } else {
        setTracks([]);
        setError("No tracks found.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again later.");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchTracks();
  }, [query]);

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <SearchBar onSearch={setQuery} />
      {loading && <LoadingSpinner />}
      {error && <ErrorMessage message={error} />}
      {!loading && !error && <TrackList tracks={tracks} onPlay={setCurrentTrack} />}
      {currentTrack && <MusicPlayer track={currentTrack} />}
    </div>
  );
};

export default Home;
