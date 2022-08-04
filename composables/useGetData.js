import { useQuery } from "@vue/apollo-composable";
//import { GET_SKILLS } from "../gql/SkillsQuery.js";
//import { GET_PROJECTS } from "../gql/ProjectsQuery.js";
import { GET_HOMEPAGE } from "../gql/HomePageQuery.js";
import { GET_CONTACTPAGE } from "../gql/ContactPageQuery.js";
import { GET_ABOUTPAGE } from "../gql/AboutPageQuery.js";
import { GET_SKILLSPAGE } from "../gql/SkillsPageQuery.js";
//import { GET_ICONS } from "../gql/IconsQuery.js";
//import { GET_CONFIG } from "../gql/ConfigQuery.js";
//import { GET_FOOTER } from "../gql/FooterQuery.js";
//import { GET_IMAGE } from "../gql/ImageQuery.js";
//import { GET_TEST } from "../gql/test.js";
export default function() {
    //const alert = useAlert();
    //const stateData = useStateData();
    const homePage = useHomePage();
    const aboutPage = useAboutPage();
    const skillsPage = useSkillsPage();
    const contactPage = useContactPage();
    const projectsPage = useProjectsPage();
    const socialLinks = useSocialLinks();
    const footer = useFooter();

    const barLoading = useBarLoading();
    const alert = useAlert();


    function getData() {
        const {
            loading: homePage_loading,
            result: homePage_result,
            error: homePage_error,
        } = useQuery(GET_HOMEPAGE);
        const {
            loading: skills_loading,
            result: skills_result,
            error: skills_error,
        } = useQuery(GET_SKILLS);
        const {
            loading: projects_loading,
            result: projects_result,
            error: projects_error,
        } = useQuery(GET_PROJECTS);
        const {
            loading: conatctPage_loading,
            result: conatctPage_result,
            error: conatctPage_error,
        } = useQuery(GET_CONTACTPAGE);
        const {
            loading: aboutPage_loading,
            result: aboutPage_result,
            error: aboutPage_error,
        } = useQuery(GET_ABOUTPAGE);
        const {
            loading: skillsPage_loading,
            result: skillsPage_result,
            error: skillsPage_error,
        } = useQuery(GET_SKILLSPAGE);
        const {
            loading: icons_loading,
            result: icons_result,
            error: icons_error,
        } = useQuery(GET_ICONS);
        const {
            loading: config_loading,
            result: config_result,
            error: config_error,
        } = useQuery(GET_CONFIG);
        const {
            loading: footer_loading,
            result: footer_result,
            error: footer_error,
        } = useQuery(GET_FOOTER);
        const {
            loading: image_loading,
            result: image_result,
            error: image_error,
        } = useQuery(GET_IMAGE);

        watchEffect(() => {
            if (
                aboutPage_result.value &&
                conatctPage_result.value &&


                homePage_result.value &&
                skillsPage_result.value

            ) {
                //stateData.value.skills = skills_result.value.skills;
                //stateData.value.projects = projects_result.value.projects;
                homePage.value = homePage_result.value.homepage[0];
                contactPage.value = conatctPage_result.value.contactpage[0];
                aboutPage.value = aboutPage_result.value.aboutpage[0];
                skillsPage.value = skillsPage_result.value.skillspage[0];
                //stateData.value.icons = icons_result.value.icons;
                //stateData.value.config = config_result.value.config[0];
                //stateData.value.footer = footer_result.value.footer[0];
                //stateData.value.image = image_result.value.image[0];



            }
            if (
                aboutPage_error.value ||
                conatctPage_error.value ||
                projects_error.value ||
                skills_error.value ||
                homePage_error.value ||
                skillsPage_error.value ||
                icons_error.value ||
                config_error.value ||
                footer_error.value ||
                image_error.value
            ) {
                console.log(aboutPage_error.value, "hasura");
                console.log(conatctPage_error.value, "hasura");
                console.log(projects_error.value, "hasura");
                console.log(skills_error.value, "hasura");
                console.log(homePage_error.value, "hasura");
                console.log(skillsPage_error.value, "hasura");
                console.log(icons_error.value, "hasura");
                console.log(config_error.value, "hasura");
                console.log(footer_error.value, "hasura");
                console.log(image_error.value, "hasura");
                if (process.client) {
                    alert.value = "Please check your connection and try again!!";
                }
            }
        });
    }


    function test() {
        const { loading, result, error } = useQuery(GET_TEST);

        watchEffect(() => {
            if (result.value) {
                console.log("test", result.value);
            }
            console.log("test", result.value);
        });
    }

    return {
        getData,
    };
}