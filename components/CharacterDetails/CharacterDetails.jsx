import React from "react";
import Image from "next/image";
import CharacterEpisodes from "../../components/CharacterEpisodes/CharacterEpisodes";

import Navbar from "../Navbar/Navbar";
import {
  Container,
  Card,
  CharacterStatus,
  Status,
  CharacterInfo,
} from "./CharacterDetails.styled";
const CharacterDetails = ({ character }) => {
  return (
    <>
      <Navbar />
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
              Name:&nbsp;
              <span>{character.name}</span>
            </h1>
            <h3>
              <CharacterStatus>
                Status:&nbsp;
                <Status
                  bg={
                    character.status === "Alive"
                      ? "green"
                      : character.status === "Dead"
                      ? "red"
                      : "gray"
                  }
                />
                <span>{character.status}</span>
              </CharacterStatus>
            </h3>
            <h3>
              Race:&nbsp;
              <span>{character.species}</span>
            </h3>
            <h3>
              Type:&nbsp;
              <span>{!character.type ? "Unknown" : character.type}</span>
            </h3>
            <h3>
              Gender:&nbsp;
              <span>{character.gender}</span>
            </h3>
            <h3>
              Location:&nbsp;
              <span>{character.location.name}</span>
            </h3>
          </CharacterInfo>
        </Card>
        <CharacterEpisodes character={character} />
      </Container>
    </>
  );
};

export default CharacterDetails;
