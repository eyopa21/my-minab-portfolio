//import { useQuery } from "@vue/apollo-composable";

import useSocialLinks from "./useSocialLinks.js";


const endpoint = "https://eyoba-portfolio.hasura.app/v1/graphql";
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
                homepage {
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
            homePage.value = data.data.homepage[0];

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
            aboutPage.value = data.data.aboutpage[0];

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
            skillsPage.value = data.data.skillspage[0];

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
                contactpage {
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
            contactPage.value = data.data.contactpage[0];

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
                social_media_links {
                  id
                  name
                  icon_name
                  value
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
            socialLinks.value = data.data.social_media_links;

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
            operationName: "footer",
            query: `query footer {
                footer {
                  id
                  year
                  name
                  city
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
            footer.value = data.data.footer;

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
        getSocialLinks

    };
}