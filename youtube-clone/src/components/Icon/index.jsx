import PropTypes from "prop-types";

import { ReactComponent as VerticalEllipsis } from "../../icons/ellipsis-vertical.svg";

export const icons = {
  VerticalEllipsis,
};

export function Icon(props) {
  const { icon, className } = props;
  const Component = icons[icon];

  return (
    <span className={className}>
      <Component />
    </span>
  );
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  className: PropTypes.string,
};
