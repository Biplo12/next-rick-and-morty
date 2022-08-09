import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Container,
  Card,
  CardContent,
  CardTop,
  Status,
} from "./Character.styled";
const Character = ({ data }) => {
  return (
    <Container>
      {data.characters.results.map((character) => {
        return (
          <Card>
            <Link href={`/character/${character.id}`}>
              <a key={character.id}>
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

                  <p>{character.species}</p>
                  <p>{character.location.name}</p>
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
