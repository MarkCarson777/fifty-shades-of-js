import { Video } from "../Video";

export function VideoList({ videos }) {
  return (
    <div>
      {videos.map((video, index) => {
        return <Video key={index} video={video} />;
      })}
    </div>
  );
}
