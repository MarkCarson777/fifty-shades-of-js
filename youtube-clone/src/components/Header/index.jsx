import PropTypes from "prop-types";

import { Avatar } from "../Avatar";
import { Icon } from "../Icon";
import { Search } from "../Search";

import youtube from "../../images/youtube.png";

import "./index.css";

export function Header({ search }) {
  return (
    <div className="header-container">
      <div className="logo-container">
        <button>
          <Icon icon="Menu" />
        </button>
        <div className="header-logo">
          <img src={youtube} alt="youtube" />
        </div>
      </div>

      <div className="test">
        <Search search={search} />
        <button>
          <Icon icon="Microphone" />
        </button>
      </div>

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
