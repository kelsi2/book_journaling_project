import { TextField } from "@mui/material";
import React, { useState } from "react";

const Search = () => {
  const [books, setBooks] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const searchBooks = async (e, value) => {
    e.preventDefault();

    const apiKey = process.env.REACT_APP_GOOGLE_BOOKS_API_KEY;
    const url = `https://www.googleapis.com/books/v1/volumes?q=${value}&key=${apiKey}`;
    const res = await fetch(url);
    const data = await res.json();

    setBooks(data.items.map((volume) => volume.volumeInfo));
    setSearchValue("");
  };
  console.log(books);

  return (
    <form onSubmit={(e) => searchBooks(e, searchValue)}>
      <TextField
        onChange={(e, value) => setSearchValue(value)}
        value={searchValue}
        placeholder="Search books"
        variant="filled"
        color="secondary"
      />
    </form>
  );
};

export default Search;
