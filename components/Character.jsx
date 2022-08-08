import React from "react";
import Image from "next/image";
const Character = ({ characters }) => {
  return (
    <div className="character-container">
      {characters.map((character) => {
        return (
          <a href="" key={character.id}>
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
