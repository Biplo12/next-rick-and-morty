import Head from "next/head";
import { useState } from "react";
import { CHARACTER_QUERY } from "../graphql/apollo-queries";
import { client } from "../graphql/apollo-client";
import Character from "../components/Character";
export default function Home(results) {
  //states
  const [search, setSearch] = useState("");
  const [characters, setCharacters] = useState(results.characters);
  const [page, setPage] = useState(0);
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
        <button onClick={() => setPage(page + 1)}>Next page</button>
        <p>Page {page}</p>
        <button onClick={() => setPage(page - 1)}>Previous page</button>
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

const PAGE_SIZE = 10;

export async function getStaticProps() {
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
  return {
    props: {
      characters: data.characters.results,
    },
  };
}
