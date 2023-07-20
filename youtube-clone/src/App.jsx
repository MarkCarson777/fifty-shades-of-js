import { useState } from "react";

import { useVideos } from "./hooks/useVideos";

import "./App.css";

export function App() {
  const [term, setTerm] = useState("");
  const [videos, search] = useVideos("sleep token");
  console.log("videos", videos);
  console.log("search", search);

  const videoSrc = `https://www.youtube.com/embed/${videos[0]?.id.videoId}`;

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          search(term);
        }}
      >
        <input
          placeholder="Search"
          type="text"
          value={term}
          onChange={(event) => setTerm(event.target.value)}
        />
      </form>
      <iframe title="video player" src={videoSrc} />
      <span>{videos[0]?.snippet.title}</span>
    </>
  );
}
