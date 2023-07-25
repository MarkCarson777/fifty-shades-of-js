import PropTypes from "prop-types";

import { VideoToolbar } from "../VideoToolbar";

import "./index.css";

export function VideoPlayer({ videos }) {
  console.log("videos", videos);
  const videoSrc = `https://www.youtube.com/embed/${videos[0]?.id.videoId}`;

  return (
    <div className="video-player-container">
      <iframe className="video-player" title="video player" src={videoSrc} />
      <p className="video-player-title">{videos[0]?.snippet.title}</p>
      <VideoToolbar />
      <div className="video-player-details">
        <p>{videos[0]?.snippet.publishedAt}</p>
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
