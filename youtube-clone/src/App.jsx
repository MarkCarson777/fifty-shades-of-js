import { useVideos } from "./hooks/useVideos";

import "./App.css";

export function App() {
  const [videos, search] = useVideos("sleep token");
  console.log("videos", videos);
  console.log("search", search);

  const videoSrc = `https://www.youtube.com/embed/${videos[0]?.id.videoId}`;

  return (
    <>
      <iframe title="video player" src={videoSrc} />
      <span>{videos[0]?.snippet.title}</span>
    </>
  );
}
