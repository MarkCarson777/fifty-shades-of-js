import { useVideos } from "./hooks/useVideos";

import { Search } from "./components/Search";
import { VideoList } from "./components/VideoList";

import "./App.css";

export function App() {
  const [videos, search] = useVideos("sleep token");

  const videoSrc = `https://www.youtube.com/embed/${videos[0]?.id.videoId}`;

  return (
    <>
      <div>
        <Search search={search} />
        <iframe title="video player" src={videoSrc} />
        <span>{videos[0]?.snippet.title}</span>
      </div>
      <div>
        <VideoList videos={videos} />
      </div>
    </>
  );
}
