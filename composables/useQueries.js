import { useQuery } from "@vue/apollo-composable";
import { GET_SKILLSPAGE } from "../gql/SkillsPageQuery.js";
import { GET_ABOUTPAGE } from "../gql/AboutPageQuery.js";
import { GET_HOMEPAGE } from "../gql/HomePageQuery.js";
import { GET_CONTACTPAGE } from "../gql/ContactPageQuery.js";

export default function() {
    const homePage = useHomePage();
    const aboutPage = useAboutPage();
    const skillsPage = useSkillsPage();
    const contactPage = useContactPage();

    const barLoading = useBarLoading();
    const alert = useAlert();

    function getHomePage() {
        const { loading, result, error } = useQuery(GET_HOMEPAGE);
        if (process.client) {
            barLoading.value = true;
        }
        watchEffect(() => {
            if (result.value) {
                homePage.value = result.value.homepage[0];

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

    function getAboutPage() {
        const { loading, result, error } = useQuery(GET_ABOUTPAGE);
        if (process.client) {
            barLoading.value = true;
        }
        watchEffect(() => {
            if (result.value) {
                aboutPage.value = result.value.aboutpage[0];

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

    function getSkillsPage() {
        const { loading, result, error } = useQuery(GET_SKILLSPAGE);
        if (process.client) {
            barLoading.value = true;
        }
        watchEffect(() => {
            if (result.value) {
                console.log("skills", result.value);
                skillsPage.value = result.value.skillspage[0];

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

    function getContactPage() {
        const { loading, result, error } = useQuery(GET_CONTACTPAGE);
        if (process.client) {
            barLoading.value = true;
        }
        watchEffect(() => {
            if (result.value) {
                contactPage.value = result.value.contactpage[0];

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
        getHomePage,
        getAboutPage,
        getSkillsPage,
        getContactPage,
    };
}