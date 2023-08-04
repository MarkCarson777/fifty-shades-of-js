import { useState } from "react";
import PropTypes from "prop-types";

import { Icon } from "../Icon";

import "./index.css";

export function Search({ search }) {
  const [term, setTerm] = useState("");

  return (
    <form
      className="search"
      onSubmit={(event) => {
        event.preventDefault();
        search(term);
      }}
    >
      <input
        className="search__input"
        placeholder="Search"
        type="text"
        value={term}
        onChange={(event) => setTerm(event.target.value)}
      />
      <button className="search__btn">
        <Icon icon="Search" />
      </button>
    </form>
  );
}

Search.propTypes = {
  search: PropTypes.func.isRequired,
};
