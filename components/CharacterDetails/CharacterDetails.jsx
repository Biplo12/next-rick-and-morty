import React from "react";
import Image from "next/image";
import {
  Container,
  Card,
  CharacterStatus,
  Status,
  CharacterInfo,
} from "./CharacterDetails.styled";
const CharacterDetails = ({ character }) => {
  return (
    <Container>
      <Card>
        <Image
          src={character.image}
          width="250px"
          height="250px"
          alt={character.name}
        />
        <CharacterInfo>
          <h1>
            <span>Name:&nbsp;</span>
            {character.name}
          </h1>
          <h3>
            <CharacterStatus>
              <span>Status:&nbsp;</span>
              <Status
                bg={
                  character.status === "Alive"
                    ? "green"
                    : character.status === "Dead"
                    ? "red"
                    : "gray"
                }
              />
              {character.status}
            </CharacterStatus>
          </h3>
          <h3>
            <span>Race:&nbsp;</span>
            {character.species}
          </h3>
          <h3>
            <span>Type:&nbsp;</span>
            {!character.type ? "Unknown" : character.type}
          </h3>
          <h3>
            <span>Gender:&nbsp;</span>
            {character.gender}
          </h3>
          <h3>
            <span>Location:&nbsp;</span>
            {character.location.name}
          </h3>
        </CharacterInfo>
      </Card>
    </Container>
  );
};

export default CharacterDetails;
