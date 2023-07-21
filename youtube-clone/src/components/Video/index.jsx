export function Video({ video }) {
  return (
    <div>
      <img
        src={video.snippet.thumbnails.default.url}
        alt={video.snippet.title}
      />
      <div>
        <p>{video.snippet.title}</p>
        <p>{video.snippet.channelTitle}</p>
        <p>{video.snippet.publishedAt}</p>
      </div>
    </div>
  );
}
