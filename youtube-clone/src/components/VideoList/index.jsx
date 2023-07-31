import PropTypes from "prop-types";

import { Video } from "../Video";

import "./index.css";

export function VideoList({ videos, onVideoSelect }) {
  return (
    <div className="video-list">
      {videos.slice(1).map((video, index) => {
        return (
          <Video key={index} video={video} onVideoSelect={onVideoSelect} />
        );
      })}
    </div>
  );
}

VideoList.propTypes = {
  videos: PropTypes.array.isRequired,
};
