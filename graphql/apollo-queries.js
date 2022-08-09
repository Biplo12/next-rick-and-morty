import { gql } from "@apollo/client";

export const CHARACTER_QUERY = gql`
  query characters {
    characters {
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
`;
