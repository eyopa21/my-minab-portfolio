import { gql } from "@apollo/client/core";

export const GET_CONTENTS = gql `
  query contents {
    contents {
      id
      description
    }
  }
`;