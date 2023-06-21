import React, {FC, Fragment} from 'react';
import {LayoutType} from "@/utils/types/layout.type";
import SeoHead from "@/components/shared/seo/head";
import LayoutHeader from "./components/header";
import LayoutFooter from "./components/footer";

const AppLayout: FC<LayoutType> = (props) => {
    const {children, seo} = props

    return (
        <Fragment>
            <LayoutHeader/>
            <SeoHead {...seo}/>
            {children}
            <LayoutFooter/>
        </Fragment>
    );
};

export default AppLayout;