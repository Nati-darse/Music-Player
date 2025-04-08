import React from "react";
import { Play } from "lucide-react";

const TrackCard = ({ track, onPlay, isCurrent }) => {
  return (
    <div className={`bg-gray-800 p-4 rounded-lg shadow-md transition-all duration-200 hover:bg-gray-700 ${isCurrent ? 'ring-2 ring-green-500' : ''}`}>
      <div className="relative group">
        <img 
          src={track.album.cover_medium} 
          alt={track.title} 
          className="w-full rounded mb-3 aspect-square object-cover"
        />
        <button
          onClick={() => onPlay(track)}
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity ${isCurrent ? 'opacity-100' : ''}`}
        >
          <div className="p-3 bg-green-600 rounded-full hover:bg-green-700">
            <Play size={20} fill="currentColor" />
          </div>
        </button>
      </div>
      <div className="min-w-0">
        <h3 className="text-lg font-semibold truncate">{track.title}</h3>
        <p className="text-sm text-gray-400 truncate">{track.artist.name}</p>
        <p className="text-xs text-gray-500 mt-1">{Math.floor(track.duration / 60)}:{String(track.duration % 60).padStart(2, '0')}</p>
      </div>
    </div>
  );
};

export default TrackCard;