import "./index.css";

export function VideoPlayer({ videos }) {
  console.log("videos", videos);
  const videoSrc = `https://www.youtube.com/embed/${videos[0]?.id.videoId}`;

  return (
    <div className="video-player-container">
      <iframe className="video-player" title="video player" src={videoSrc} />
      <p className="video-player-title">{videos[0]?.snippet.title}</p>
      <div className="video-player-details"></div>
    </div>
  );
}
