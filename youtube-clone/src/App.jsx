import { useState, useEffect } from "react";

import { useVideos } from "./hooks/useVideos";

import { Header } from "./components/Header";
import { VideoList } from "./components/VideoList";
import { VideoPlayer } from "./components/VideoPlayer";

import "./App.css";

export function App() {
  const [currentVideo, setCurrentVideo] = useState(null);
  const [videos, search] = useVideos("sleep token");

  useEffect(() => {
    setCurrentVideo(videos[0]);
  }, [videos]);

  return (
    <div className="page-container">
      <Header search={search} />
      <div className="flex">
        <VideoPlayer video={currentVideo} />
        <VideoList videos={videos} onVideoSelect={setCurrentVideo} />
      </div>
    </div>
  );
}
