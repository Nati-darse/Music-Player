import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import SearchBar from "../components/SearchBar";
import TrackList from "../components/TrackList";
import MusicPlayer from "../components/MusicPlayer";
import { TrackListSkeleton } from "../components/TrackListSkeleton";

const Home = () => {
  const { user, logout } = useAuth();
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // 🎧 Recently Played State
  const [recentlyPlayed, setRecentlyPlayed] = useState(() => {
    const stored = localStorage.getItem("recentlyPlayed");
    return stored ? JSON.parse(stored) : [];
  });

  // Fetch popular tracks on mount
  useEffect(() => {
    fetchPopularTracks();
  }, []);

  const fetchPopularTracks = async () => {
    setIsLoading(true);
    setError("");
    try {
      const response = await fetch(
        `https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/tracks?limit=50`
      );
      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();
      if (!data.data) {
        throw new Error("No data in response");
      }

      setTracks(data.data);
    } catch (err) {
      setError(`Failed to load tracks: ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = async (query) => {
    if (!query.trim()) {
      fetchPopularTracks();
      return;
    }

    setIsLoading(true);
    setError("");
    setSearchQuery(query);
    try {
      const response = await fetch(
        `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${encodeURIComponent(
          query
        )}`
      );
      if (!response.ok) throw new Error("Search failed");
      const data = await response.json();
      setTracks(data.data || []);
      if (!data.data?.length) {
        setError(`No results for "${query}". Try a different search.`);
      }
    } catch (err) {
      setError("Search failed. Please check your connection.");
    } finally {
      setIsLoading(false);
    }
  };

  const handlePlayPause = (track) => {
    if (currentTrack?.id === track.id) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentTrack(track);
      setIsPlaying(true);

      // Update Recently Played
      setRecentlyPlayed((prev) => {
        const updated = [track, ...prev.filter((t) => t.id !== track.id)].slice(0, 5);
        localStorage.setItem("recentlyPlayed", JSON.stringify(updated));
        return updated;
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white pb-32">
      {/* Navigation */}
      <header className="bg-gray-800 p-4 flex justify-between items-center sticky top-0 z-10">
        <h1 className="text-xl font-bold truncate max-w-[50%]">
          {searchQuery ? `Search: ${searchQuery}` : "Popular Tracks"}
        </h1>
        <div className="flex items-center gap-4">
          <span className="text-sm hidden sm:inline">{user?.email || "Guest"}</span>
          <button
            onClick={logout}
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-sm sm:text-lg transition"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <SearchBar onSearch={handleSearch} />

        {/* 🎧 Recently Played Section */}
        {recentlyPlayed.length > 0 && (
          <div className="mt-8">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-semibold">🎧 Recently Played</h2>
              <button
                className="text-sm text-red-400 hover:underline"
                onClick={() => {
                  localStorage.removeItem("recentlyPlayed");
                  setRecentlyPlayed([]);
                }}
              >
                Clear
              </button>
            </div>
            <TrackList
              tracks={recentlyPlayed}
              onPlay={handlePlayPause}
              currentTrack={currentTrack}
              isPlaying={isPlaying}
            />
          </div>
        )}

        {/* Track List or Skeleton/Error */}
        {isLoading ? (
          <TrackListSkeleton />
        ) : error ? (
          <div className="bg-red-500/20 text-red-200 p-4 rounded-lg text-center">
            {error}
            {error.includes("connection") && (
              <button
                onClick={() => window.location.reload()}
                className="mt-2 bg-red-600 px-3 py-1 rounded text-sm"
              >
                Retry
              </button>
            )}
          </div>
        ) : (
          <TrackList
            tracks={tracks}
            onPlay={handlePlayPause}
            currentTrack={currentTrack}
            isPlaying={isPlaying}
          />
        )}
      </div>

      {/* Music Player */}
      <MusicPlayer
        track={currentTrack}
        isPlaying={isPlaying}
        onPlayPause={() => setIsPlaying(!isPlaying)}
        onNext={() => {
          const currentIndex = tracks.findIndex((t) => t.id === currentTrack?.id);
          const nextTrack = tracks[currentIndex + 1] || tracks[0];
          if (nextTrack) {
            setCurrentTrack(nextTrack);
            setIsPlaying(true);
          }
        }}
        onPrevious={() => {
          const currentIndex = tracks.findIndex((t) => t.id === currentTrack?.id);
          const prevTrack = tracks[currentIndex - 1] || tracks[tracks.length - 1];
          if (prevTrack) {
            setCurrentTrack(prevTrack);
            setIsPlaying(true);
          }
        }}
      />
    </div>
  );
};

export default Home;
