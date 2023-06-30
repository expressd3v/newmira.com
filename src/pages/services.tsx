import React, {FC} from 'react';
import AppLayout from "@/layouts";
import ServicesHero from "@/components/services/hero";
import ServiceDetailed from "@/components/services/detailed";

const ServicesPage: FC = () => {
    return (
        <AppLayout>
            <ServicesHero/>
            <ServiceDetailed/>
        </AppLayout>
    );
};

export default ServicesPage;