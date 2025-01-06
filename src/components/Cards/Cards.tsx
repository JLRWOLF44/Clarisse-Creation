import React from "react";
import "./Cards.css";

interface CardI {
  imgSrc: string;
}

function Cards({ imgSrc }: CardI) {
  return (
    <figure>
      <img src={imgSrc} alt="Card" />
    </figure>
  );
}

export default Cards;
