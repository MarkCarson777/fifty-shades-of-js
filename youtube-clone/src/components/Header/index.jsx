import PropTypes from "prop-types";

import { Search } from "../Search";

import "./index.css";

export function Header({ search }) {
  return (
    <div className="header-container">
      <Search search={search} />
    </div>
  );
}

Header.propTypes = {
  search: PropTypes.func.isRequired,
};
