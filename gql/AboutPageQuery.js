import { gql } from "@apollo/client/core";

export const GET_ABOUTPAGE = gql `
query aboutpage {
  aboutpage {
    id
    header
    description
    imageByImage {
      url
      id
    }
    timelines(order_by: {id: desc}) {
      id
      ofwhom
      right
      subtitle
      title
      description
    }
  }
}

`;