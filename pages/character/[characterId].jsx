import React from "react";
import CharacterDetails from "../../components/CharacterDetails/CharacterDetails";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Link from "next/link";
import { useQuery } from "@apollo/client";
import { CHARACTER_QUERY } from "../../graphql/apollo-queries";
import { useRouter } from "next/router";

const characterId = () => {
  const router = useRouter();
  const id = router.query.characterId;
  const { data, loading, error } = useQuery(CHARACTER_QUERY, {
    variables: {
      id,
    },
  });
  if (error) return `Error! ${error}`;
  const character = data?.character;
  if (loading) return <h1>Loading...</h1>;
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
      <Header />
      <Navbar />
      <CharacterDetails character={character} />
    </>
  );
};

export default characterId;
