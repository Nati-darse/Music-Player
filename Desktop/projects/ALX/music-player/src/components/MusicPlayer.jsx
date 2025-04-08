import React, { useRef, useEffect } from "react";

const MusicPlayer = ({ currentTrack, isPlaying, onPlayPause }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      isPlaying ? audioRef.current.play() : audioRef.current.pause();
    }
  }, [isPlaying, currentTrack]);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <img src={currentTrack?.album.cover_small} alt="cover" className="w-12 h-12 rounded-md" />
        <div>
          <p className="font-bold">{currentTrack?.title}</p>
          <p className="text-sm text-gray-500">{currentTrack?.artist.name}</p>
        </div>
      </div>
      <button
        onClick={onPlayPause}
        className="px-4 py-2 bg-indigo-600 text-white rounded-full"
      >
        {isPlaying ? "Pause" : "Play"}
      </button>
      <audio ref={audioRef} src={currentTrack?.preview} />
    </div>
  );
};

export default MusicPlayer;
