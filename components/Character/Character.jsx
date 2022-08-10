import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Container,
  Card,
  CardContent,
  CardTop,
  CardBottom,
  Status,
} from "./Character.styled";
const Character = ({ data }) => {
  return (
    <Container>
      {data.characters.results.map((character) => {
        return (
          <Card key={character.id}>
            <Link href={`/character/${character.id}`}>
              <a>
                <Image
                  src={character.image}
                  alt={character.name}
                  width="250px"
                  height="225px"
                  objectFit="cover"
                />
                <CardContent>
                  <CardTop>
                    <h2>{character.name}</h2>
                    <p>
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
                    </p>
                  </CardTop>
                  <CardBottom>
                    <p>
                      <span>Race:&nbsp;</span>
                      {character.species}
                    </p>
                    <p>
                      <span>Location:&nbsp;</span>
                      {character.location.name}
                    </p>
                  </CardBottom>
                </CardContent>
              </a>
            </Link>
          </Card>
        );
      })}
    </Container>
  );
};

export default Character;
