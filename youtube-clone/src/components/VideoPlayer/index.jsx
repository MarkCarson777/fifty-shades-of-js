import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { timeElapsedString } from "../../functions/timeElapsed";

import { VideoToolbar } from "../VideoToolbar";

import "./index.css";

export function VideoPlayer({ video }) {
  const [timeElapsed, setTimeElapsed] = useState(null);
  const videoSrc = `https://www.youtube.com/embed/${video?.id.videoId}`;

  useEffect(() => {
    const data = timeElapsedString(new Date(video?.snippet.publishedAt));
    setTimeElapsed(`${data.elapsed} ${data.unit} ago`);
  }, [video]);

  return (
    <div className="video-player-container">
      <iframe className="video-player" title="video player" src={videoSrc} />
      <p className="video-player-title">{video?.snippet.title}</p>
      <VideoToolbar />
      <div className="video-player-details">
        <p>{timeElapsed}</p>
        <p className="video-player-description">{video?.snippet.description}</p>
      </div>
    </div>
  );
}

VideoPlayer.propTypes = {
  videos: PropTypes.array.isRequired,
};
