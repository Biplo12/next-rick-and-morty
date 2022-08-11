import React from "react";
import Image from "next/image";
import Navbar from "../Navbar/Navbar";
import { Container, Card } from "./CharacterEpisodes.styled";
const CharacterDetails = ({ character }) => {
  console.log(character.episode);
  return (
    <>
      <Container>
        <Card>
          <h1>Character appears in this episodes:</h1>
          {character.episode.map(({ episode, name }) => {
            return (
              <>
                <ul>
                  <li>
                    {episode} {name}
                  </li>
                </ul>
              </>
            );
          })}
        </Card>
      </Container>
    </>
  );
};

export default CharacterDetails;
