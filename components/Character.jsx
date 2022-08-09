import React from "react";
import Image from "next/image";
const Character = ({ data }) => {
  return (
    <div className="character-container">
      {data.characters.results.map((character) => {
        return (
          <a href={`/character-details/${character.id}`} key={character.id}>
            <Image
              src={character.image}
              alt={character.name}
              width="150px"
              height="150px"
            />
            <h2>{character.name}</h2>
          </a>
        );
      })}
    </div>
  );
};

export default Character;
