import PropTypes from "prop-types";

import { Avatar } from "../Avatar";
import { Icon } from "../Icon";
import { Search } from "../Search";

import youtube from "../../images/youtube.png";

import "./index.css";

export function Header({ search }) {
  return (
    <header className="header">
      <div className="header__group-one">
        <button>
          <Icon className="header__icon" icon="Menu" />
        </button>
        <div className="header__logo">
          <img src={youtube} alt="youtube" />
        </div>
      </div>

      <div className="header__group-two">
        <Search search={search} />
        <button>
          <Icon className="header__icon" icon="Microphone" />
        </button>
      </div>

      <div className="header__group-three">
        <button>
          <Icon className="header__icon" icon="Video" />
        </button>
        <button>
          <Icon className="header__icon" icon="Bell" />
        </button>
        <Avatar />
      </div>
    </header>
  );
}

Header.propTypes = {
  search: PropTypes.func.isRequired,
};
