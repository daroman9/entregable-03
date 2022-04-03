import axios from "axios";
import React from "react";
import { useState } from "react";

const SearchBox = ({ setData }) => {
  const [input, setInput] = useState("");

  const changeId = () => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${input}`)
      .then((res) => setData(res.data));
  };
  return (
    <>
      <div className="search">
        <div className="center">
          <input
            type="text"
            onChange={(e) => setInput(e.target.value)}
            value={input}
            placeholder="Introduzca un ID para realizar la búsqueda"
          />
          <button className="button" onClick={changeId}>
            Search
          </button>
        </div>
      </div>
    </>
  );
};
export default SearchBox;
