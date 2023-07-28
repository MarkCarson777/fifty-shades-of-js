import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { timeElapsedString } from "../../functions/timeElapsed";

import { Icon } from "../Icon";
import { VideoBadge } from "../VideoBadge";

import "./index.css";

export function Video({ video }) {
  const [timeElapsed, setTimeElapsed] = useState(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isNew, setIsNew] = useState(false);

  useEffect(() => {
    const data = timeElapsedString(new Date(video.snippet.publishedAt));

    setTimeElapsed(`${data.elapsed} ${data.unit} ago`);

    if (data.isNew) {
      setIsNew(true);
    }
  }, [video.snippet.publishedAt]);

  function onMouseOver() {
    setIsHovering(true);
  }

  function onMouseOut() {
    setIsHovering(false);
  }

  return (
    <div
      className="video-container"
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      <img
        className="video-img"
        src={video.snippet.thumbnails.default.url}
        alt={video.snippet.title}
      />
      <div className="video-details">
        <p className="video-title">{video.snippet.title}</p>
        <p className="video-channel">{video.snippet.channelTitle}</p>
        <p className="video-published">{timeElapsed}</p>
        {isNew && <VideoBadge label="New" />}
      </div>
      {isHovering && (
        <>
          <Icon icon="VerticalEllipsis" className="video-icon" />
          <div className="video-img-icon-container">
            <Icon icon="Clock" className="video-img-icon" />
            <Icon icon="RectangleList" className="video-img-icon" />
          </div>
        </>
      )}
    </div>
  );
}

Video.propTypes = {
  video: PropTypes.shape({
    snippet: PropTypes.shape({
      title: PropTypes.string.isRequired,
      channelTitle: PropTypes.string.isRequired,
      publishedAt: PropTypes.string.isRequired,
      thumbnails: PropTypes.shape({
        default: PropTypes.shape({
          url: PropTypes.string.isRequired,
        }),
      }),
    }),
  }),
};
