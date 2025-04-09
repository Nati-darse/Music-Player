import React from "react";
import { Play, Pause } from "lucide-react"; // Using lucide-react icons

const TrackCard = ({ track, onPlay, isCurrent, isPlaying }) => {
  // Safe data access with fallbacks
  const coverImage = track?.album?.cover_medium || '/placeholder-cover.jpg';
  const title = track?.title || 'Unknown Track';
  const artist = track?.artist?.name || 'Unknown Artist';
  const duration = track?.duration || 0;

  // Format duration (mm:ss)
  const formattedDuration = `${Math.floor(duration / 60)}:${String(duration % 60).padStart(2, '0')}`;

  return (
    <div 
      className={`bg-gray-800 p-4 rounded-lg transition-all hover:bg-gray-700 cursor-pointer ${
        isCurrent ? 'ring-2 ring-indigo-500' : ''
      }`}
      onClick={() => track && onPlay(track)}
    >
      <div className="relative group">
        <img 
          src={coverImage} 
          alt={title} 
          className="w-full rounded mb-3 aspect-square object-cover"
          onError={(e) => {
            e.target.src = '/placeholder-cover.jpg'; // Fallback image
          }}
        />
        <button 
          className="absolute bottom-4 right-4 bg-indigo-600 hover:bg-indigo-700 p-3 rounded-full transition opacity-0 group-hover:opacity-100"
          onClick={(e) => {
            e.stopPropagation();
            track && onPlay(track);
          }}
        >
          {isCurrent && isPlaying ? (
            <Pause className="w-5 h-5" />
          ) : (
            <Play className="w-5 h-5" />
          )}
        </button>
      </div>
      <div className="truncate">
        <h3 className="text-lg font-semibold truncate">{title}</h3>
        <p className="text-sm text-gray-400 truncate">{artist}</p>
        <p className="text-xs text-gray-500 mt-1">
          {formattedDuration}
        </p>
      </div>
    </div>
  );
};

export default TrackCard;