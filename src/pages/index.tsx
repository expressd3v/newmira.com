import React from 'react';
import {NextPage} from "next";
import {Button} from "@mui/material";
import AppLayout from "@/layouts";
import {SeoProps} from "@/utils/types/layout.type";
import HomeHero from "@/components/home/hero";
import HomeAbout from "@/components/home/about";

const pageSeo: SeoProps = {
    title: "Newmira Digital, LLC",
    description: "",

}

const HomePage: NextPage = () => {
    return (
        <AppLayout seo={pageSeo}>
            <HomeHero/>
            <HomeAbout/>
        </AppLayout>
    );
};

export default HomePage;