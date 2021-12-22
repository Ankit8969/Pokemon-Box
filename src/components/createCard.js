import React, { useState, useEffect } from "react";
import PopUp from "./popup";

const CreateCard = ({ url }) => {
  const [individual, setIndividual] = useState([]);
  const [show, setShow] = useState(false);

  const fetchIndividualPokemon = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setIndividual(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchIndividualPokemon();
  }, [url]);

  const { name, id } = individual;
  console.log(show);
  return (
    <>
      <div className="card" onClick={() => setShow(!show)}>
        <img
          src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${id}.svg`}
          alt=""
        />
        <p>{id}</p>
        <h2>{name}</h2>
      </div>
      {show ? <PopUp show={show} setShow={setShow} id={id} name={name} /> : ""}
    </>
  );
};

export default CreateCard;
