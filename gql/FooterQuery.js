import { gql } from "@apollo/client/core";

export const GET_FOOTER = gql `
query footer {
  footer {
    id
    year
    name
    city
  }
}


`;