import PropTypes from "prop-types";

import { ReactComponent as Clock } from "../../icons/clock.svg";
import { ReactComponent as RectangleList } from "../../icons/rectangle-list.svg";
import { ReactComponent as VerticalEllipsis } from "../../icons/ellipsis-vertical.svg";

export const icons = {
  Clock,
  RectangleList,
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
