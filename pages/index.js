import Head from "next/head";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { useState } from "react";
import Character from "../components/Character";
export default function Home(results) {
  //states
  const [search, setSearch] = useState("");
  const [characters, setCharacters] = useState(results.characters);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const results = await fetch("/api/search", {
      method: "POST",
      body: search,
    });
    const { characters } = await results.json();
    setCharacters(characters);
  };

  const onReset = async () => {
    setSearch("");
    setCharacters(results.characters);
  };

  return (
    <>
      <Head>
        <title>Rick and morty API</title>
        <meta name="description" content="Rick and morty API using graphql" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="home-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="searchbar"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit">Search</button>
          <button type="reset" onClick={onReset}>
            Reset
          </button>
        </form>
        <Character characters={characters} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const api_uri = "https://rickandmortyapi.com/graphql";
  const client = new ApolloClient({
    uri: api_uri,
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      query {
        characters(page: 2) {
          info {
            count
          }
          results {
            name
            id
            image
          }
        }
        location(id: 1) {
          id
        }
        episodesByIds(ids: [1, 2]) {
          id
        }
      }
    `,
  });
  return {
    props: {
      characters: data.characters.results,
    },
  };
}
