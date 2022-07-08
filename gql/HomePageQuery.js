import { gql } from "@apollo/client/core";

export const GET_HOMEPAGE = gql `
  query homepage {
    homepage {
      id
      header
      description
    }
  }
`;