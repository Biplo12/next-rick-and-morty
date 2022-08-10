import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Container,
  Card,
  CardContent,
  CardTop,
  CardBottom,
  StatusContainer,
  Status,
} from "./Character.styled";
const Character = ({ data }) => {
  return (
    <Container>
      {data.characters.results.map(
        ({ id, image, name, status, species, location }) => {
          return (
            <Card key={id}>
              <Link href={`/character/${id}`}>
                <a>
                  <Image
                    src={image}
                    alt={name}
                    width="250px"
                    height="225px"
                    objectFit="cover"
                  />
                  <CardContent>
                    <CardTop>
                      <h2>{name}</h2>
                      <StatusContainer>
                        <Status
                          bg={
                            status === "Alive"
                              ? "green"
                              : status === "Dead"
                              ? "red"
                              : "gray"
                          }
                        />
                        {status}
                      </StatusContainer>
                    </CardTop>
                    <CardBottom>
                      <p>
                        <span>Race:&nbsp;</span>
                        {species}
                      </p>
                      <p>
                        <span>Location:&nbsp;</span>
                        {location.name}
                      </p>
                    </CardBottom>
                  </CardContent>
                </a>
              </Link>
            </Card>
          );
        }
      )}
    </Container>
  );
};

export default Character;
