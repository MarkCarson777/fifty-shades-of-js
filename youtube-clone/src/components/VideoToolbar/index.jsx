import "./index.css";

export function VideoToolbar() {
  return (
    <div className="video-toolbar-container">
      <button className="video-toolbar-subscribe">Subscribe</button>
      <button className="video-toolbar-like">Like</button>
      <button className="video-toolbar-dislike">Dislike</button>
      <button className="video-toolbar-share">Share</button>
      <button className="video-toolbar-download">Download</button>
      <button className="video-toolbar-menu">Menu</button>
    </div>
  );
}
