import React from 'react';
import {NextPage} from "next";
import AppLayout from "@/layouts";
import AboutHero from "@/components/about/hero";
import HomeTeam from "@/components/home/team";
import AboutMission from "@/components/about/mission";
import AboutExpertise from "@/components/about/expertise";
import {Container, Divider} from "@mui/material";
import AboutApproach from "@/components/about/approach";
import AboutInvocation from "@/components/about/invocation";
import AboutSupport from "@/components/about/support";

const AboutPage: NextPage = () => {
    return (
        <AppLayout>
            <AboutHero/>
            <HomeTeam/>
            <AboutMission/>
            <Container><Divider/></Container>
            <AboutExpertise/>
            <Container><Divider/></Container>
            <AboutApproach/>
            <Container><Divider/></Container>
            <AboutInvocation/>
            <Container><Divider/></Container>
            <AboutSupport/>
            <Container><Divider/></Container>
        </AppLayout>
    );
};

export default AboutPage;