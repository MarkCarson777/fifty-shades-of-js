import useVideos from "./hooks/useVideos";

import "./App.css";

export function App() {
  const [videos, search] = useVideos("sleep token");
  console.log("videos", videos);
  console.log("search", search);
  return <>Youtube</>;
}
