import { useState } from "react";
import PropTypes from "prop-types";

import { Icon } from "../Icon";

import "./index.css";

export function Search({ search }) {
  const [term, setTerm] = useState("");

  return (
    <>
      <form
        className="search-container"
        onSubmit={(event) => {
          event.preventDefault();
          search(term);
        }}
      >
        <input
          className="search-input"
          placeholder="Search"
          type="text"
          value={term}
          onChange={(event) => setTerm(event.target.value)}
        />
        <button className="search-btn">
          <Icon icon="Search" />
        </button>
      </form>
    </>
  );
}

Search.propTypes = {
  search: PropTypes.func.isRequired,
};
