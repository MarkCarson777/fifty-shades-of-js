import { Video } from "../Video";

import "./index.css";

export function VideoList({ videos }) {
  return (
    <div className="video-list">
      {videos.map((video, index) => {
        return <Video key={index} video={video} />;
      })}
    </div>
  );
}
