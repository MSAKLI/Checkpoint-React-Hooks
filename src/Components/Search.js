import React, { useState } from "react";
import MovieList from "./MovieList";
import { Form } from "react-bootstrap";

const Search = () => {
  const [Search, setSearch] = useState("");
  console.log(Search);

  return (
    <div>
      <Form.Control
        type="Name"
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
      />
      <br />
      <MovieList input={Search} />
    </div>
  );
};

export default Search;
