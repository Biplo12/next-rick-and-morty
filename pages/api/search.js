import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
export default async (req, res) => {
  const api_uri = "https://rickandmortyapi.com/graphql";
  const client = new ApolloClient({
    uri: api_uri,
    cache: new InMemoryCache(),
  });
  try {
    const { data } = await client.query({
      query: gql`
        query {
          characters(page: 2, filter: { name: "${req.body}" }) {
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
    res.status(200).json({ characters: data.characters.results });
  } catch (err) {
    console.log(err);
  }
};
