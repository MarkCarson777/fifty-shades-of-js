import "./index.css";

export function VideoBadge(props) {
  const { label } = props;

  return <div className="video-badge">{label}</div>;
}
