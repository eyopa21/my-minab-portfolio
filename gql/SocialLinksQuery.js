import { gql } from "@apollo/client/core";

export const GET_SOCIALLINKS = gql `
query social_media_links {
  social_media_links {
    id
    name
    icon_name
    value
  }
}


`;