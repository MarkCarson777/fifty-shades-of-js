import PropTypes from "prop-types";

import { ReactComponent as Bell } from "../../icons/bell.svg";
import { ReactComponent as Clock } from "../../icons/clock.svg";
import { ReactComponent as Dislike } from "../../icons/thumbs-down.svg";
import { ReactComponent as Download } from "../../icons/download.svg";
import { ReactComponent as Like } from "../../icons/thumbs-up.svg";
import { ReactComponent as Menu } from "../../icons/icon-menu.svg";
import { ReactComponent as Microphone } from "../../icons/microphone.svg";
import { ReactComponent as RectangleList } from "../../icons/rectangle-list.svg";
import { ReactComponent as Search } from "../../icons/magnifying-glass.svg";
import { ReactComponent as Share } from "../../icons/share-from-square.svg";
import { ReactComponent as VerticalEllipsis } from "../../icons/ellipsis-vertical.svg";
import { ReactComponent as Video } from "../../icons/video.svg";

import "./index.css";

export const icons = {
  Bell,
  Clock,
  Dislike,
  Download,
  Like,
  Menu,
  Microphone,
  RectangleList,
  Search,
  Share,
  VerticalEllipsis,
  Video,
};

export function Icon(props) {
  const { icon, className } = props;
  const Component = icons[icon];

  return (
    <span className={className}>
      <Component className="icon" />
    </span>
  );
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  className: PropTypes.string,
};
