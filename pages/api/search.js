import { gql } from "@apollo/client";
import { client } from "../../graphql/apollo-client";
export default async (req, res) => {
  try {
    const { data, loading, error } = await client.query({
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
    if (loading) {
      return <div>Loading...</div>;
    }
    if (error) {
      console.error(error);
      return <div>Error!</div>;
    }
    res.status(200).json({ characters: data.characters.results });
  } catch (err) {
    console.log(err);
  }
};
