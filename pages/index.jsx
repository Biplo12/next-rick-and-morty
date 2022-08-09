import Head from "next/head";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import { CHARACTERS_QUERY } from "../graphql/apollo-queries";
import Character from "../components/Character";

export default function Home() {
  const [page, setPage] = useState(1);
  const { data, loading, error } = useQuery(CHARACTERS_QUERY, {
    variables: {
      pages: page,
    },
  });
  if (loading) {
    return <h1>Loading</h1>;
  }
  if (error) return `Error! ${error}`;
  return (
    <>
      <Head>
        <title>Rick and morty API</title>
        <meta name="description" content="Rick and morty API using graphql" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="home-container">
        <button
          onClick={() => {
            setPage(page + 1);
          }}
        >
          Next Page
        </button>
        <p>Page {page}</p>
        <button
          disabled={page <= 1}
          onClick={() => setPage((prev) => prev - 1)}
        >
          Previous Page
        </button>
        <Character data={data} />
      </div>
    </>
  );
}
