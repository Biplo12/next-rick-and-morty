import React from "react";
import Image from "next/image";
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
  if (loading) {
    return <h1>Loading</h1>;
  }
  if (error) return `Error! ${error}`;
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
    <div>
      <Image
        src={character.image}
        alt={character.name}
        width="150px"
        height="150px"
      />
      <h2>{character.name}</h2>
    </div>
  );
};

export default characterId;
