import Head from "next/head";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import { CHARACTERS_QUERY } from "../graphql/apollo-queries";
import GlobalStyles from "../components/global.styled";
import Character from "../components/Character/Character";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";

export default function Home() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [result, setResult] = useState("");
  const { data, loading, error } = useQuery(CHARACTERS_QUERY, {
    variables: {
      page,
      result,
    },
  });
  if (loading) {
    return <h1>Loading</h1>;
  }
  if (error) return `Error! ${error}`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult(search);
  };
  const onReset = async () => {
    setResult("");
    setPage(1);
  };
  const page_number = Math.ceil(data.characters.info.count / 20);
  return (
    <>
      <Head>
        <title>Rick and morty API</title>
        <meta name="description" content="Rick and morty API using graphql" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="home-container">
        <GlobalStyles />
        <Header />
        <Navbar />
        {/* <form onSubmit={handleSubmit}>
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
        <button
        onClick={() => {
          setPage(page + 1);
          }}
          >
          Next Page
          </button>
          <p>
          Page {page} / {page_number}
          </p>
          <button
          disabled={page <= 1}
          onClick={() => setPage((prev) => prev - 1)}
          >
          Previous Page
        </button> */}
        <Character data={data} />
      </div>
    </>
  );
}
