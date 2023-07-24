import { useVideos } from "./hooks/useVideos";

import { Header } from "./components/Header";
import { VideoList } from "./components/VideoList";
import { VideoPlayer } from "./components/VideoPlayer";

import "./App.css";

export function App() {
  const [videos, search] = useVideos("sleep token");

  return (
    <div className="page-container">
      <Header search={search} />
      <div className="flex">
        <VideoPlayer videos={videos} />
        <VideoList videos={videos} />
      </div>
    </div>
  );
}
