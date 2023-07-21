import "./index.css";

export function Video({ video }) {
  function timeElapsedString(date) {
    const now = new Date();
    const timeDifferenceInMillis = now - date;

    const millisInHour = 60 * 60 * 1000;
    const hoursElapsed = Math.floor(timeDifferenceInMillis / millisInHour);

    if (hoursElapsed === 1) {
      return "1 hour ago";
    } else if (hoursElapsed > 1 && hoursElapsed <= 24) {
      return hoursElapsed + " hours ago";
    } else {
      return "More than 24 hours ago";
    }
  }

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
          {timeElapsedString(
            new Date(video.snippet.publishedAt).toLocaleString()
          )}
        </p>
      </div>
    </div>
  );
}
