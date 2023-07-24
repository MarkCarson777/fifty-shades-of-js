import { useVideos } from "./hooks/useVideos";

import { Search } from "./components/Search";
import { VideoList } from "./components/VideoList";
import { VideoPlayer } from "./components/VideoPlayer";

import "./App.css";

export function App() {
  const [videos, search] = useVideos("sleep token");

  return (
    <div className="page-container">
      <Search search={search} />
      <div className="flex">
        <VideoPlayer videos={videos} />
        <VideoList videos={videos} />
      </div>
    </div>
  );
}
