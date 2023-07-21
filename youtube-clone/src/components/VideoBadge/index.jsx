import PropTypes from "prop-types";

import "./index.css";

export function VideoBadge(props) {
  const { label } = props;

  return <div className="video-badge">{label}</div>;
}

VideoBadge.propTypes = {
  label: PropTypes.string.isRequired,
};
