import { gql } from "@apollo/client/core";

export const GET_PROJECTSPAGE = gql `
query projects {
  projects {
    id
    title
    subtitle
    description
    image
    link
    project_skills {
      skills {
        id
        skill_name
        level
      }
    }
  }
}


`;