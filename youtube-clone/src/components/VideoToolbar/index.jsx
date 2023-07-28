import { Icon } from "../Icon";

import "./index.css";

export function VideoToolbar() {
  return (
    <div className="video-toolbar-container">
      <button className="video-toolbar-subscribe">Subscribe</button>
      <div className="video-toolbar-container">
        <button className="video-toolbar-like">
          <Icon icon="Like" />
        </button>
        <button className="video-toolbar-dislike">
          <Icon icon="Dislike" />
        </button>
        <button className="video-toolbar-share">
          <Icon icon="Share" />
          Share
        </button>
        <button className="video-toolbar-download">
          <Icon icon="Download" />
          Download
        </button>
        <button className="video-toolbar-menu">
          <Icon icon="VerticalEllipsis" />
        </button>
      </div>
    </div>
  );
}
