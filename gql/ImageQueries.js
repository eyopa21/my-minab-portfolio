import { gql } from "@apollo/client/core";

export const GET_IMAGES = gql `
  query images {
    images {
      id
      main_image
    }
  }
`;