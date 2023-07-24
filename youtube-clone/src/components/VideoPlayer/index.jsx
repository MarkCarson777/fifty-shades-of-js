import "./index.css";

export function VideoPlayer({ videos }) {
  const videoSrc = `https://www.youtube.com/embed/${videos[0]?.id.videoId}`;

  return (
    <div className="video-player-container">
      <iframe className="video-player" title="video player" src={videoSrc} />
      <p>{videos[0]?.snippet.title}</p>
    </div>
  );
}
