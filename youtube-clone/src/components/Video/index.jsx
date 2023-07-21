export function Video({ video }) {
  console.log("video", video);
  return (
    <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
  );
}
