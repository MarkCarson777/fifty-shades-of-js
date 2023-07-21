import { VideoBadge } from "../VideoBadge";

import "./index.css";

export function Video(props) {
  const { video } = props;

  function timeElapsedString(date) {
    const now = new Date();
    const timeDifferenceInmillis = now - date;

    const millisInSecond = 1000;
    const millisInMinute = 60 * millisInSecond;
    const millisInHour = 60 * millisInMinute;
    const millisInDay = 24 * millisInHour;
    const millisInMonth = 30 * millisInDay;
    const millisInYear = 12 * millisInMonth;

    let elapsed, unit;

    switch (true) {
      case timeDifferenceInmillis >= millisInYear:
        elapsed = Math.floor(timeDifferenceInmillis / millisInYear);
        unit = elapsed === 1 ? "year" : "years";
        break;
      case timeDifferenceInmillis >= millisInMonth:
        elapsed = Math.floor(timeDifferenceInmillis / millisInMonth);
        unit = elapsed === 1 ? "month" : "months";
        break;
      case timeDifferenceInmillis >= millisInDay:
        elapsed = Math.floor(timeDifferenceInmillis / millisInDay);
        unit = elapsed === 1 ? "day" : "days";
        break;
      case timeDifferenceInmillis >= millisInHour:
        elapsed = Math.floor(timeDifferenceInmillis / millisInHour);
        unit = elapsed === 1 ? "hour" : "hours";
        break;
      default:
        elapsed = Math.floor(timeDifferenceInmillis / millisInMinute);
        unit = elapsed === 1 ? "minute" : "minutes";
        break;
    }

    return `${elapsed} ${unit} ago`;
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
        <VideoBadge label="New" />
      </div>
    </div>
  );
}
