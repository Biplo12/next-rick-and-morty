import React from "react";
import Image from "next/image";
import { Container } from "./Character.styled";
const CharacterDetails = ({ character }) => {
  return (
    <Container>
      <Image src={character.image} width="200px" height="200px" />
      <h1>{character.name}</h1>
      <p>{character.type}</p>
    </Container>
  );
};

export default CharacterDetails;
