import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { timeElapsedString } from "../../functions/timeElapsed";

import { VideoToolbar } from "../VideoToolbar";

import "./index.css";

export function VideoPlayer({ videos }) {
  const [timeElapsed, setTimeElapsed] = useState(null);
  const videoSrc = `https://www.youtube.com/embed/${videos[0]?.id.videoId}`;

  useEffect(() => {
    const data = timeElapsedString(new Date(videos[0]?.snippet.publishedAt));
    setTimeElapsed(`${data.elapsed} ${data.unit} ago`);
  }, [videos]);

  console.log("videos", videos);

  return (
    <div className="video-player-container">
      <iframe className="video-player" title="video player" src={videoSrc} />
      <p className="video-player-title">{videos[0]?.snippet.title}</p>
      <VideoToolbar />
      <div className="video-player-details">
        <p>{timeElapsed}</p>
        <p className="video-player-description">
          {videos[0]?.snippet.description}
        </p>
      </div>
    </div>
  );
}

VideoPlayer.propTypes = {
  videos: PropTypes.array.isRequired,
};
