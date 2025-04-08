import React, { useRef, useEffect, useState } from "react";
import { Play, Pause, Volume2, SkipForward, SkipBack } from "lucide-react";

const MusicPlayer = ({ track, onNext, onPrevious }) => {
  const audioRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.7);

  useEffect(() => {
    if (track) {
      audioRef.current.volume = volume;
      const playPromise = audioRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.error("Playback failed:", error);
        });
      }
      
      setIsPlaying(true);
    }
  }, [track]);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 p-4 shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Track Info */}
        <div className="flex items-center gap-4 min-w-0">
          <img 
            src={track?.album.cover_small || '/placeholder-cover.jpg'} 
            alt={track?.title} 
            className="w-12 h-12 rounded flex-shrink-0"
          />
          <div className="truncate">
            <h4 className="text-md font-semibold truncate">{track?.title || 'No track selected'}</h4>
            <p className="text-sm text-gray-400 truncate">{track?.artist.name || ''}</p>
          </div>
        </div>

        {/* Player Controls */}
        <div className="flex items-center gap-4">
          <button onClick={onPrevious} className="p-2 text-gray-300 hover:text-white">
            <SkipBack size={20} />
          </button>
          <button 
            onClick={togglePlay} 
            className="p-3 bg-green-600 rounded-full hover:bg-green-700"
          >
            {isPlaying ? <Pause size={24} /> : <Play size={24} />}
          </button>
          <button onClick={onNext} className="p-2 text-gray-300 hover:text-white">
            <SkipForward size={20} />
          </button>
        </div>

        {/* Volume Control */}
        <div className="hidden md:flex items-center gap-2 w-32">
          <Volume2 size={18} className="text-gray-300" />
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="w-full accent-green-500"
          />
        </div>

        <audio
          ref={audioRef}
          src={track?.preview}
          onEnded={onNext}
          onPause={() => setIsPlaying(false)}
          onPlay={() => setIsPlaying(true)}
        />
      </div>
    </div>
  );
};

export default MusicPlayer;