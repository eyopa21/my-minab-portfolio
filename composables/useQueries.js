import { useQuery } from "@vue/apollo-composable";
import { GET_PROJECTS } from "../gql/ProjectQueries.js";
import { GET_SKILLS } from "../gql/SkillQueries.js";
import { GET_CONTENTS } from "../gql/ContentQueries.js";
import { GET_IMAGES } from "../gql/ImageQueries.js";

export default function() {
    const projects = useProjects();
    const skills = useSkills();
    const images = useImage();

    const aboutContent = useAboutContent();
    const skillsContent = useSkillsContent();
    const contactContent = useContactContent();

    const barLoading = useBarLoading();
    const alert = useAlert();

    function getProjects() {
        console.log("from", projects.value);

        const { loading, result, error } = useQuery(GET_PROJECTS);

        if (process.client) {
            barLoading.value = true;
        }
        watchEffect(() => {
            if (result.value) {
                projects.value = result.value.projects;
                console.log("projjjjj", projects.value);
                if (process.client) {
                    barLoading.value = false;
                }
            }
            if (error.value) {
                console.log(error, "hasura");
                if (process.client) {
                    alert.value = "Please check your connection and try again!!";
                }
            }
        });
    }

    function getSkills() {
        const { loading, result, error } = useQuery(GET_SKILLS);

        if (process.client) {
            barLoading.value = true;
        }
        watchEffect(() => {
            if (result.value) {
                skills.value = result.value.skills;
                if (process.client) {
                    barLoading.value = false;
                }
            }
            if (error.value) {
                console.log(error, "hasura");
                if (process.client) {
                    alert.value = "Please check your connection and try again!!";
                }
            }
        });
    }

    function getContents() {
        const { loading, result, error } = useQuery(GET_CONTENTS);

        if (process.client) {
            barLoading.value = true;
        }
        watchEffect(() => {
            if (result.value) {
                aboutContent.value = result.value.contents[0].description;
                skillsContent.value = result.value.contents[1].description;
                contactContent.value = result.value.contents[2].description;
                if (process.client) {
                    barLoading.value = false;
                }
            }
            if (error.value) {
                console.log(error, "hasura");
                if (process.client) {
                    alert.value = "Please check your connection and try again!!";
                }
            }
        });
    }

    function getImages() {
        const { loading, result, error } = useQuery(GET_IMAGES);

        if (process.client) {
            barLoading.value = true;
        }
        watchEffect(() => {
            if (result.value) {
                images.value = result.value.images[0].main_image;
                if (process.client) {
                    barLoading.value = false;
                }
            }
            if (error.value) {
                console.log(error, "hasura");
                if (process.client) {
                    alert.value = "Please check your connection and try again!!";
                }
            }
        });
    }
    return {
        getProjects,
        getSkills,
        getContents,
        getImages,
    };
}