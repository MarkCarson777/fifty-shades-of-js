import PropTypes from "prop-types";

import "./index.css";

export function VideoBadge({ label }) {
  return <div className="video-badge">{label}</div>;
}

VideoBadge.propTypes = {
  label: PropTypes.string.isRequired,
};
