import PropTypes from "prop-types";

import { Avatar } from "../Avatar";
import { Icon } from "../Icon";
import { Search } from "../Search";

import "./index.css";

export function Header({ search }) {
  return (
    <div className="header-container">
      <button>
        <Icon icon="Menu" />
      </button>

      <Search search={search} />
      <button className="header-microphone">
        <Icon icon="Microphone" />
      </button>

      <div className="header-button-group">
        <button>
          <Icon icon="Video" />
        </button>
        <button>
          <Icon icon="Bell" />
        </button>
        <Avatar />
      </div>
    </div>
  );
}

Header.propTypes = {
  search: PropTypes.func.isRequired,
};
