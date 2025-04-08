import React from "react";

const TrackCard = ({ track, onPlay }) => (
  <div className="bg-white p-4 rounded-xl shadow-md flex flex-col items-center">
    <img src={track.album.cover_medium} alt={track.title} className="rounded-md mb-2" />
    <h3 className="font-semibold text-lg text-center">{track.title}</h3>
    <p className="text-sm text-gray-600">{track.artist.name}</p>
    <button
      onClick={() => onPlay(track)}
      className="mt-2 px-4 py-1 bg-green-500 text-white rounded-full"
    >
      Play
    </button>
  </div>
);

export default TrackCard;
