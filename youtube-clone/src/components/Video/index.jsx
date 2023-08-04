import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { timeElapsedString } from "../../functions/timeElapsed";

import { Icon } from "../Icon";
import { VideoBadge } from "../VideoBadge";

import "./index.css";

export function Video({ video, onVideoSelect }) {
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
      className="video"
      onClick={() => onVideoSelect(video)}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      <img
        className="video__img"
        src={video.snippet.thumbnails.default.url}
        alt={video.snippet.title}
      />
      <div className="video__details">
        <p className="video__title">{video.snippet.title}</p>
        <p className="video__channel">{video.snippet.channelTitle}</p>
        <p className="video__published">{timeElapsed}</p>
        {isNew && <VideoBadge label="New" />}
      </div>
      {isHovering && (
        <>
          <Icon icon="VerticalEllipsis" className="video__menu" />
          <div className="video__icons">
            <Icon icon="Clock" className="video__icon" />
            <Icon icon="RectangleList" className="video__icon" />
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
