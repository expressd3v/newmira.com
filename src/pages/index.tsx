import React from 'react';
import {NextPage} from "next";
import {Button} from "@mui/material";
import AppLayout from "@/layouts";
import {SeoProps} from "@/utils/types/layout.type";

const pageSeo: SeoProps = {
    title: "Newmira Digital, LLC",
    description: "",

}

const HomePage: NextPage = () => {
    return (
        <AppLayout seo={pageSeo}>
            {/*<Button*/}
            {/*    disableElevation*/}
            {/*    variant="contained"*/}
            {/*    color="secondary">*/}
            {/*    Home*/}
            {/*</Button>*/}
        </AppLayout>
    );
};

export default HomePage;