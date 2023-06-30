import React from 'react';
import {NextPage} from "next";
import AppLayout from "@/layouts";
import FaqHero from "@/components/faq/hero";
import FaqQuestions from "@/components/faq/questions";

const FaqPage: NextPage = () => {
    return (
        <AppLayout>
            <FaqHero/>
            <FaqQuestions/>
        </AppLayout>
    );
};

export default FaqPage;