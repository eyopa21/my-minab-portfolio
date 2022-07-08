import { gql } from "@apollo/client/core";

export const GET_CONTACTPAGE = gql `
query contact {
  contactpage {
    header
    description
    id
  }
}

`;