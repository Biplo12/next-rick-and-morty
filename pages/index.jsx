import Head from "next/head";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import {
  Container,
  Form,
  Input,
  SearchContainer,
  Buttons,
  Button,
  PageContainer,
} from "./Home.styled";
import { CHARACTERS_QUERY } from "../graphql/apollo-queries";
import Character from "../components/Character/Character";
import Navbar from "../components/Navbar/Navbar";

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
        <a
          href="https://status.rickandmortyapi.com/"
          target={"_blank"}
          rel="noreferrer"
        >
          https://status.rickandmortyapi.com/
        </a>
        or
        <a
          href="https://rickandmortyapi.com/api/character/1"
          target={"_blank"}
          rel="noreferrer"
        >
          https://rickandmortyapi.com/api/character/1
        </a>
      </div>
    );
  }

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
      <Container>
        <Navbar />
        <Form onSubmit={handleSubmit}>
          <SearchContainer>
            <Input
              type="text"
              name="searchbar"
              onChange={(e) => setSearch(e.target.value)}
            />
            <Buttons>
              <Button type="submit">Search</Button>
              <Button type="reset" onClick={onReset}>
                Reset
              </Button>
            </Buttons>
          </SearchContainer>
          <PageContainer>
            <Button
              disabled={page <= 1 || data.characters.info.count === null}
              onClick={() => setPage((prev) => prev - 1)}
            >
              Previous Page
            </Button>
            <p>
              Page {data.characters.info.count === null ? 0 : page} /{" "}
              {page_number}
            </p>
            <Button
              onClick={() => {
                setPage(page + 1);
              }}
              disabled={
                page === page_number || data.characters.info.count === null
              }
            >
              Next Page
            </Button>
          </PageContainer>
        </Form>
        <Character data={data} />
      </Container>
    </>
  );
}
