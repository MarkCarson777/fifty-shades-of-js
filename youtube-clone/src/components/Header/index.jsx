import PropTypes from "prop-types";

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

      <div>
        <button>
          <Icon icon="Video" />
        </button>
        <button>
          <Icon icon="Bell" />
        </button>
      </div>
    </div>
  );
}

Header.propTypes = {
  search: PropTypes.func.isRequired,
};
