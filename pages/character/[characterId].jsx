import React from "react";
import CharacterDetails from "../../components/CharacterDetails/CharacterDetails";
import Navbar from "../../components/Navbar/Navbar";
import Link from "next/link";
import { useQuery } from "@apollo/client";
import { CHARACTER_QUERY } from "../../graphql/apollo-queries";
import { useRouter } from "next/router";

const CharacterId = () => {
  const router = useRouter();
  const id = router.query.CharacterId;
  const { data, loading, error } = useQuery(CHARACTER_QUERY, {
    variables: {
      id,
    },
  });
  if (loading)
    return (
      <div className="loading">
        <div className="lds-ripple">
          <div></div>
          <div></div>
        </div>
      </div>
    );
  if (error) {
    console.log(error);
    return (
      <div className="error">
        <h1>Error occurred, please check console for further informations</h1>
        <h2>Check status of API server:</h2>
        <a href="https://status.rickandmortyapi.com/" target={"_blank"}>
          https://status.rickandmortyapi.com/
        </a>
        or
        <a href="https://rickandmortyapi.com/api/character/1" target={"_blank"}>
          https://rickandmortyapi.com/api/character/1
        </a>
      </div>
    );
  }

  const character = data?.character;
  if (!character)
    return (
      <>
        <h1>Character not found</h1>
        <Link href="/">
          <a>Go back to main page</a>
        </Link>
      </>
    );
  return (
    <>
      <Navbar />
      <CharacterDetails character={character} />
    </>
  );
};

export default CharacterId;
