import "./index.css";

export function Video({ video }) {
  function timeElapsedString(date) {
    console.log("date", date);
    const now = new Date();
    const timeDifferenceInMillis = now - date;

    const millisInHour = 60 * 60 * 1000;
    const hoursElapsed = Math.floor(timeDifferenceInMillis / millisInHour);
    console.log("hours", hoursElapsed);
    if (hoursElapsed === 1) {
      return "1 hour ago";
    } else if (hoursElapsed > 1 && hoursElapsed <= 24) {
      return hoursElapsed + " hours ago";
    } else if (hoursElapsed > 24 && hoursElapsed <= 48) {
      return "1 day ago";
    } else {
      const daysElapsed = Math.floor(hoursElapsed / 24);
      return daysElapsed + " days ago";
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
          {timeElapsedString(new Date(video.snippet.publishedAt))}
        </p>
      </div>
    </div>
  );
}
