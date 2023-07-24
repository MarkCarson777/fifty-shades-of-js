import { useVideos } from "./hooks/useVideos";

import { Search } from "./components/Search";
import { VideoList } from "./components/VideoList";

import "./App.css";

export function App() {
  const [videos, search] = useVideos("sleep token");

  const videoSrc = `https://www.youtube.com/embed/${videos[0]?.id.videoId}`;

  return (
    <div className="page-container">
      <Search search={search} />
      <div className="flex">
        <div>
          <iframe title="video player" src={videoSrc} />
          <p>{videos[0]?.snippet.title}</p>
        </div>
        <VideoList videos={videos} />
      </div>
    </div>
  );
}
