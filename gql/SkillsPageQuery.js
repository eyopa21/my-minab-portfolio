import { gql } from "@apollo/client/core";

export const GET_SKILLSPAGE = gql `
query skillspage {
  skillspage {
    description
    header
    skills {
      level
      skill_name
      usedby
      ofwhom
      id
    }
    id
  }
}


`;