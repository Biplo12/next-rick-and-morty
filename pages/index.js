import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { useState } from "react";
export default function Home({ characters }) {
  const [search, setSearch] = useState("");
  const { results } = characters;
  console.log(search, results);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Rick and morty API</title>
        <meta name="description" content="Rick and morty API using graphql" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="searchbar"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
        <div className={styles.grid}>
          {results.map((result) => {
            return (
              <a href="#" key={result.id} className={styles.card}>
                <h2>{result.name}</h2>
              </a>
            );
          })}
        </div>
      </main>
    </div>
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
      query Query {
        characters(page: 2, filter: { name: "" }) {
          info {
            count
          }
          results {
            name
            id
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
      characters: data.characters,
    },
  };
}
