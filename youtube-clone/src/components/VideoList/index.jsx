import { Video } from "../Video";

export function VideoList({ videos }) {
  return (
    <div>
      {videos.map((video) => {
        return <Video video={video} />;
      })}
    </div>
  );
}
