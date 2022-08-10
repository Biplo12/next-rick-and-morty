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
        created
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
      gender
      species
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
