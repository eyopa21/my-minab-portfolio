import { gql } from "@apollo/client/core"

export const GET_PROJECTS = gql `
  query projects {
    projects {
      id
      title
    }
  }
`