import React from 'react';
import {NextPage} from "next";
import {Button, Divider, useMediaQuery, useTheme} from "@mui/material";
import AppLayout from "@/layouts";
import {SeoProps} from "@/utils/types/layout.type";
import HomeHero from "@/components/home/hero";
import HomeAbout from "@/components/home/about";
// import HomeWorks from "@/components/home/works";
// import HomeScore from "@/components/home/score";
// import HomeTestimonials from "@/components/home/testimonials";
// import HomeTeam from "@/components/home/team";
// import HomeBlog from "@/components/home/blog";
import HomeContact from "@/components/home/contact";
import MobileHero from "@/components/home/hero/mobile";

const pageSeo: SeoProps = {
    title: "Newmira Digital, LLC",
    description: "",

}

const HomePage: NextPage = () => {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down("lg"))

    console.log(isMobile)

    return (
        <AppLayout seo={pageSeo}>
            {
                isMobile ? <MobileHero/> : <HomeHero/>
            }
            <HomeAbout/>
            {/*<HomeWorks/>*/}
            {/*<HomeScore/>*/}
            {/*<HomeTestimonials/>*/}
            {/*<HomeTeam/>*/}
            {/*<HomeBlog/>*/}
            <HomeContact/>
        </AppLayout>
    );
};

export default HomePage;