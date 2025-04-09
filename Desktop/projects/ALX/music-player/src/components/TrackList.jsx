import TrackCard from "./TrackCard";

const TrackList = ({ tracks, onPlay, currentTrack, isPlaying }) => {
  if (!tracks?.length) {
    return (
      <div className="text-center py-12 text-gray-400">
        <div className="text-4xl mb-4">🎵</div>
        <p>No tracks available. Try searching for music.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {tracks.map((track) => (
        <TrackCard 
          key={track.id} 
          track={track} 
          onPlay={onPlay}
          isCurrent={currentTrack?.id === track.id}
          isPlaying={currentTrack?.id === track.id && isPlaying}
        />
      ))}
    </div>
  );
};

export default TrackList;