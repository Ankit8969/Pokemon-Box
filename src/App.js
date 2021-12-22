import React, { useState, useEffect } from "react";
import "./index.css";
import CreateCard from "./components/createCard";
import Navbar from "./components/Navbar";

const App = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [search, setSearch] = useState("");
  const [offset, setOffset] = useState(260);

  const fetchPokemonList = async () => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=21`
      );
      const data = await response.json();
      setPokemonList(data["results"]);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchPokemonList();
  }, [offset]);

  const handlePrev = () => {
    setOffset(offset - 20);
  };

  const handleNext = () => {
    setOffset(offset + 20);
  };

  return (
    <>
      <Navbar />
      <div className="formCard-box">
        <input
          type="text"
          placeholder="Search name or Id"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <section>
          {pokemonList.map((item) => (
            <CreateCard key={item["name"]} url={item["url"]} />
          ))}
        </section>

        <div className="btn-group">
          <button onClick={handlePrev}>Prev</button>
          <button onClick={handleNext}>Next</button>
        </div>
      </div>
    </>
  );
};

export default App;
