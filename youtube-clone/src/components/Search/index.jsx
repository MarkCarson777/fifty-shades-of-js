import { useState } from "react";

export function Search({ search }) {
  const [term, setTerm] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        search(term);
      }}
    >
      <input
        placeholder="Search"
        type="text"
        value={term}
        onChange={(event) => setTerm(event.target.value)}
      />
      <button>Search</button>
    </form>
  );
}
