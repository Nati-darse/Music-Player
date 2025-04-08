import { useState, useEffect } from "react";

const useDeezerSearch = (query) => {
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) {
      setTracks([]);
      return;
    }

    const fetchTracks = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`https://api.deezer.com/search?q=${query}`);
        if (!res.ok) throw new Error("Network response was not ok");
        const data = await res.json();
        setTracks(data.data || []);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchTracks();
  }, [query]);

  return { tracks, loading, error };
};

export default useDeezerSearch;
