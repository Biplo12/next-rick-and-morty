import { gql } from "@apollo/client";

export const CHARACTERS_QUERY = gql`
  query characters($page: Int!, $result: String!) {
    characters(page: $page, filter: { name: $result }) {
      info {
        count
      }
      results {
        name
        id
        image
        status
        species
        location {
          name
        }
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
      type
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
