import React from "react";
import TrackCard from "./TrackCard";
import LoadingSpinner from "./LoadingSpinner";
import ErrorMessage from "./ErrorMessage";

const TrackList = ({ tracks, onPlay, currentTrack, isLoading, error }) => {
  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;
  if (!tracks?.length) return <p className="text-gray-400 text-center py-8">No tracks found. Try a different search.</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {tracks.map((track) => (
        <TrackCard 
          key={track.id} 
          track={track} 
          onPlay={onPlay}
          isCurrent={currentTrack?.id === track.id}
        />
      ))}
    </div>
  );
};

export default TrackList;