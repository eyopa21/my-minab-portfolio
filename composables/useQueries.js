//import { useQuery } from "@vue/apollo-composable";

import useSocialLinks from "./useSocialLinks.js";

const endpoint = "http://localhost:8080/v1/graphql";
const headers = {
    "content-type": "application/json",
};

export default function() {
    const homePage = useHomePage();
    const aboutPage = useAboutPage();
    const skillsPage = useSkillsPage();
    const contactPage = useContactPage();
    const projectsPage = useProjectsPage();
    const socialLinks = useSocialLinks();
    const footer = useFooter();

    const barLoading = useBarLoading();
    const alert = useAlert();

    async function getHomePage() {
        if (process.client) {
            barLoading.value = true;
        }
        const graphqlQuery = {
            operationName: "homepage",
            query: `query homepage {
                homePage {
                  id
                  header
                  description
                }
              }`,
        };

        const options = {
            method: "POST",
            headers: headers,
            body: JSON.stringify(graphqlQuery),
        };

        const res = await fetch(endpoint, options);
        const data = await res.json();
        if (data.data) {
            homePage.value = data.data.homePage[0];

            if (process.client) {
                barLoading.value = false;
            }
        }

        if (data.errors) {
            console.log(data.errors, "from hasura");
            if (process.client) {
                alert.value = "Please check your connection and try again!!";
            }
        }

        if (process.client) {
            console.log(data.data);
            console.log(data.errors);
        }
    }

    async function getAboutPage() {
        if (process.client) {
            barLoading.value = true;
        }
        const graphqlQuery = {
            operationName: "aboutpage",
            query: `query aboutpage {
                aboutPage {
                  id
                  header
                  description
                  
                  timelines(order_by: {id: desc}) {
                    id
                   
                    right
                    subtitle
                    title
                    description
                  }
                }
              }`,
        };

        const options = {
            method: "POST",
            headers: headers,
            body: JSON.stringify(graphqlQuery),
        };

        const res = await fetch(endpoint, options);
        const data = await res.json();
        if (data.data) {
            aboutPage.value = data.data.aboutPage[0];

            if (process.client) {
                barLoading.value = false;
            }
        }

        if (data.errors) {
            console.log(data.errors, "from hasura");
            if (process.client) {
                alert.value = "Please check your connection and try again!!";
            }
        }

        if (process.client) {
            console.log(data.data);
            console.log(data.errors);
        }
    }

    async function getSkillsPage() {
        if (process.client) {
            barLoading.value = true;
        }
        const graphqlQuery = {
            operationName: "skillspage",
            query: `query skillspage {
                skillsPage {
                    id
                    header
                    description
                    skills {
                      id
                      skill_name
                      level
                      iconSvg {
                        name
                        svg
                      }
                    }
                  }
              }`,
        };

        const options = {
            method: "POST",
            headers: headers,
            body: JSON.stringify(graphqlQuery),
        };

        const res = await fetch(endpoint, options);
        const data = await res.json();
        if (data.data) {
            skillsPage.value = data.data.skillsPage[0];

            if (process.client) {
                barLoading.value = false;
            }
        }

        if (data.errors) {
            console.log(data.errors, "from hasura");
            if (process.client) {
                alert.value = "Please check your connection and try again!!";
            }
        }

        if (process.client) {
            console.log(data.data);
            console.log(data.errors);
        }
    }

    async function getProjectsPage() {
        if (process.client) {
            barLoading.value = true;
        }
        const graphqlQuery = {
            operationName: "projects",
            query: `query projects {
                projects {
                    id
                    title
                    subtitle
                    description
                    pricture
                    link
                    project_skills {
                      skill {
                        id
                        skill_name
                        level
                        iconSvg {
                          svg
                        }
                      }
                    }
                  }
                        }`,
        };

        const options = {
            method: "POST",
            headers: headers,
            body: JSON.stringify(graphqlQuery),
        };

        const res = await fetch(endpoint, options);
        const data = await res.json();
        if (data.data) {
            projectsPage.value = data.data.projects;

            if (process.client) {
                barLoading.value = false;
            }
        }

        if (data.errors) {
            console.log(data.errors, "from hasura");
            if (process.client) {
                alert.value = "Please check your connection and try again!!";
            }
        }

        if (process.client) {
            console.log(data.data);
            console.log(data.errors);
        }
    }

    async function getContactpage() {
        if (process.client) {
            barLoading.value = true;
        }
        const graphqlQuery = {
            operationName: "contact",
            query: `query contact {
                     contactPage {
                       header
                       description
                       id
                     }
                   }`,
        };

        const options = {
            method: "POST",
            headers: headers,
            body: JSON.stringify(graphqlQuery),
        };

        const res = await fetch(endpoint, options);
        const data = await res.json();
        if (data.data) {
            contactPage.value = data.data.contactPage[0];

            if (process.client) {
                barLoading.value = false;
            }
        }

        if (data.errors) {
            console.log(data.errors, "from hasura");
            if (process.client) {
                alert.value = "Please check your connection and try again!!";
            }
        }

        if (process.client) {
            console.log(data.data);
            console.log(data.errors);
        }
    }

    async function getSocialLinks() {
        if (process.client) {
            barLoading.value = true;
        }
        const graphqlQuery = {
            operationName: "social_media_links",
            query: `query social_media_links {
                social_links {
                    id
                    name
                    value
                    iconSvg {
                      svg
                    }
                  }
                }`,
        };

        const options = {
            method: "POST",
            headers: headers,
            body: JSON.stringify(graphqlQuery),
        };

        const res = await fetch(endpoint, options);
        const data = await res.json();
        if (data.data) {
            socialLinks.value = data.data.social_links;

            if (process.client) {
                barLoading.value = false;
            }
        }

        if (data.errors) {
            console.log(data.errors, "from hasura");
            if (process.client) {
                alert.value = "Please check your connection and try again!!";
            }
        }

        if (process.client) {
            console.log(data.data);
            console.log(data.errors);
        }
    }

    async function getFooter() {
        if (process.client) {
            barLoading.value = true;
        }
        const graphqlQuery = {
            operationName: "user",
            query: `query user {
                user {
                    id
                    email
                    location
                    logo
                    name
                    picture
                    year
                  }
                           }`,
        };

        const options = {
            method: "POST",
            headers: headers,
            body: JSON.stringify(graphqlQuery),
        };

        const res = await fetch(endpoint, options);
        const data = await res.json();
        if (data.data) {
            footer.value = data.data.user;

            if (process.client) {
                barLoading.value = false;
            }
        }

        if (data.errors) {
            console.log(data.errors, "from hasura");
            if (process.client) {
                alert.value = "Please check your connection and try again!!";
            }
        }

        if (process.client) {
            console.log(data.data);
            console.log(data.errors);
        }
    }

    return {
        getFooter,
        getHomePage,
        getAboutPage,
        getSkillsPage,
        getProjectsPage,
        getContactpage,
        getSocialLinks,
    };
}