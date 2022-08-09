import { gql } from "@apollo/client";

export const CHARACTERS_QUERY = gql`
  query characters($pages: Int!) {
    characters(page: $pages) {
      info {
        count
      }
      results {
        name
        id
        image
      }
    }
  }
`;

export const CHARACTER_QUERY = gql`
  query getCharacter($id: ID!) {
    character(id: $id) {
      name
      id
      image
      status
      location {
        name
      }
      origin {
        name
      }
      episode {
        id
        name
      }
    }
  }
`;
