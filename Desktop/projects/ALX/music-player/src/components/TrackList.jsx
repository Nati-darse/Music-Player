import React from "react";
import TrackCard from "./TrackCard";

const TrackList = ({ tracks, onPlay }) => (
  <div className="grid gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    {tracks.map((track) => (
      <TrackCard key={track.id} track={track} onPlay={onPlay} />
    ))}
  </div>
);

export default TrackList;