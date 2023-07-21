import "./index.css";

export function Video({ video }) {
  return (
    <div className="video-container">
      <img
        className="video-img"
        src={video.snippet.thumbnails.default.url}
        alt={video.snippet.title}
      />
      <div className="video-details">
        <p className="video-title">{video.snippet.title}</p>
        <p className="video-channel">{video.snippet.channelTitle}</p>
        <p className="video-published">
          {new Date(video.snippet.publishedAt).toLocaleString()}
        </p>
      </div>
    </div>
  );
}
