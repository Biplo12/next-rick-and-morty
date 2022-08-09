import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { CHARACTER_QUERY } from "../../graphql/apollo-queries";
import { client } from "../../graphql/apollo-client";

export const getStaticPaths = async () => {
  const { loading, error, data } = await client.query({
    query: CHARACTER_QUERY,
  });
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    console.error(error);
    return <div>Error!</div>;
  }
  const paths = data.characters.results.map((character) => {
    return {
      params: { characterId: character.id },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps() {
  const { data, loading, error } = await client.query({
    query: CHARACTER_QUERY,
  });

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    console.error(error);
    return <div>Error!</div>;
  }

  return {
    props: {
      characters: data.characters.results,
    },
  };
}

const CharacterDetails = (results) => {
  const router = useRouter();
  const characterId = router.query.characterId;
  const filteredCharacter = results.characters.filter(
    (fil) => fil.id === characterId
  );
  console.log(filteredCharacter);
  return (
    <div className="details-container">
      <Image
        src={filteredCharacter[0].image}
        alt={filteredCharacter[0].name}
        width="150px"
        height="150px"
      />
      <h2>{filteredCharacter[0].name}</h2>
    </div>
  );
};

export default CharacterDetails;
