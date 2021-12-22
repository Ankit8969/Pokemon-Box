import React from "react";
import "../index.css";

const PopUp = ({ show, setShow, id, name }) => {
  return (
    <div className="close">
      <div className="PopUpCard">
        <div>
          <img
            src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${id}.svg`}
            alt=""
          />
        </div>
        <div className="pokemon-details">
          <p>{id}</p>
          <p>{name}</p>
        </div>
        <i className="fas fa-times close-card" onClick={() => setShow(!show)} />
      </div>
      <div className="overlay"></div>
    </div>
  );
};

export default PopUp;
