import React, {FC, Fragment} from 'react';
import {LayoutType} from "@/utils/types/layout.type";
import SeoHead from "@/components/shared/seo/head";
import LayoutHeader from "./components/header";
import LayoutFooter from "./components/footer";
import GlobalMenu from "@/components/shared/menu";


const AppLayout: FC<LayoutType> = (props) => {
    const {children, seo} = props



    return (
        <Fragment>
            <GlobalMenu/>
            <SeoHead {...seo}/>
            <LayoutHeader/>
            {children}
            <LayoutFooter/>
        </Fragment>

    );
};

export default AppLayout;