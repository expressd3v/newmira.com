import React, {FC} from 'react';
import AppLayout from "@/layouts";
import HomeContact from "@/components/home/contact";
import ContractHero from "@/components/contract/hero";

const ContactPage: FC = () => {
    return (
        <AppLayout>
            <ContractHero/>
            <HomeContact/>
        </AppLayout>
    );
};

export default ContactPage;